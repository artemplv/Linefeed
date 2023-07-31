class Api::ChannelsController < ApplicationController
  wrap_parameters include: Channel.attribute_names

  before_action :require_logged_in

  def create
    workspace_id = params[:workspace_id]
    @channel = Channel.new({
      **channel_params,
      workspace_id: workspace_id,
      owner_id: current_user.id
    })

    if @channel.save
      render :show
    else
      @errors = @channel.errors
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  def index
    @channels

    workspace = Workspace.find(params[:workspace_id])
    @channels = workspace.channels
    
    render :index
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end
