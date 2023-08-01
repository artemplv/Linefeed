class Api::MessagesController < ApplicationController
  wrap_parameters include: Message.attribute_names

  before_action :require_logged_in

  def create
    workspace_id = params[:workspace_id]
    @message = Message.new({
      **message_params,
      workspace_id: workspace_id,
      author_id: current_user.id
    })

    ActiveRecord::Base.transaction do
      # save message to a channel
      if params[:channel_id]
        @channel = Channel.find(params[:channel_id])
        @message.channel = @channel
      end
      @message.save!
    end

    if params[:channel_id]
      ChannelsChannel.broadcast_to @message.channel,
        from_template('api/messages/show', message: @message)
    end

    render json: nil, status: :ok
  end

  def index
    if params[:channel_id]
      @channel = Channel.find(params[:channel_id])
      
      @messages = @channel.messages
    end
    
    render :index
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
