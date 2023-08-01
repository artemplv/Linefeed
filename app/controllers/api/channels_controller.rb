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

    @channel.description ||= get_default_description

    if @channel.save
      render :show
    else
      @errors = @channel.errors
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  def destroy
    @channel = Channel.find(params[:id])

    if @channel.destroy
      render json: { message: 'success' }
    else
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

  def get_default_description
    'This channel is for everything. Hold meetings, share docs, and make decisions together with your team.'
  end
end
