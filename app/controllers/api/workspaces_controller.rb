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
end
