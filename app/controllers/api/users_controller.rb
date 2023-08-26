class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

  before_action :require_logged_in, only: [:index, :show, :search]

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      @errors = @user.errors
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  def index
    @users
    if params[:workspace_id]
      workspace = Workspace.find(params[:workspace_id])
      @users = workspace.users
    end

    render :index
  end

  def show
    @user = User.find(params[:id])

    render :show
  end

  def search
    workspace = Workspace.find(params[:workspace_id])

    @users = workspace.users
      .select("users.*, common_chat_id")
      .joins("
        LEFT JOIN (
          SELECT
            id AS common_chat_id,
            interlocutor_1_id,
            interlocutor_2_id,
            workspace_id
          FROM chats
          WHERE workspace_id = #{workspace.id} AND #{current_user.id} IN (interlocutor_1_id, interlocutor_2_id)
          LIMIT 1
        ) AS common_chat
        ON(users.id = common_chat.interlocutor_1_id OR users.id = common_chat.interlocutor_2_id)
      ")
      .where(
        "CONCAT(first_name, ' ', last_name) LIKE '%#{params[:query]}%' OR email LIKE '%#{params[:query]}%'",
      )
      .limit(5)

    render :index
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end
end
