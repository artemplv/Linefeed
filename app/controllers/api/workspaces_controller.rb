class Api::WorkspacesController < ApplicationController
  wrap_parameters include: Workspace.attribute_names

  before_action :require_logged_in
  before_action :require_workspace_membership, except: [:index, :create]

  def index
    @workspaces = current_user.workspaces.includes(:workspace_users, :channels)
    render :index
  end

  def show
    @workspace = Workspace.find(params[:id])

    render :show
  end

  def create
    @workspace = Workspace.new(workspace_params)
    @workspace.name ||= 'My Workspace'
    @workspace.owner_id = current_user.id

    ActiveRecord::Base.transaction do
      @workspace.save!
      # add owner as a member of a workspace
      WorkspaceUser.create!({
        workspace_id: @workspace.id,
        user_id: @workspace.owner_id,
      });
    end

    render :show
  end

  def update
    @workspace = Workspace.find(params[:id])

    if params[:users]
      users_ids = User.select(:id).where('email IN (?)', params[:users]);
      @workspace.users << users_ids
    end

    if @workspace.update(workspace_params)
      render :show
    else
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  def search
    workspace = Workspace.find(params[:workspace_id])

    search_query = params[:query].downcase

    @users = workspace.users
      .where(
        "LOWER(CONCAT(first_name, ' ', last_name)) LIKE '%#{search_query}%' OR LOWER(email) LIKE '%#{search_query}%'",
      )
      .limit(5)

    @channels = workspace.channels
      .where("LOWER(name) LIKE '%#{search_query}%'")
      .limit(5)

    render 'api/workspaces/search'
  end

  def destroy
    workspace = Workspace.find(params[:id])

    if workspace.destroy
      render json: { message: 'success' }
    else
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  private

  def workspace_params
    params.fetch(:workspace, {}).permit(:name)
  end
end
