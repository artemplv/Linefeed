class Api::WorkspacesController < ApplicationController
  before_action :require_logged_in

  def index
    @workspaces = current_user.workspaces.includes(:workspace_users)
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

    if @workspace.update(workspace_params)
      render :show
    else
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  private

  def workspace_params
    params.fetch(:workspace, {}).permit(:name)
  end
end
