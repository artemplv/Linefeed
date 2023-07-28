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
    params.require(:workspace).permit(:name, :owner_id);
  end
end
