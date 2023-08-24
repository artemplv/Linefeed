class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']

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

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end
end
