class Api::MessagesController < ApplicationController
  wrap_parameters include: Message.attribute_names

  before_action :require_logged_in

  def index
    if params[:channel_id]
      @channel = Channel.find(params[:channel_id])
      
      @messages = @channel.messages
    elsif params[:chat_id]
      @chat = Chat.find(params[:chat_id])

      @messages = @chat.messages
    end
    
    render :index
  end

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
      
      # save message to a chat
      if params[:chat_id]
        @chat = Chat.find(params[:chat_id])
        @message.chat = @chat
      end
      
      @message.save!
    end

    if params[:channel_id]
      ChannelsChannel.broadcast_to @message.channel,
        type: 'RECEIVE_MESSAGE',
        **from_template('api/messages/show', message: @message)
    end

    if params[:chat_id]
      ChatsChannel.broadcast_to @message.chat,
        type: 'RECEIVE_MESSAGE',
        **from_template('api/messages/show', message: @message)
    end

    render json: nil, status: :ok
  end

  def destroy
    @message = Message.find(params[:id])

    if @message
      ChannelsChannel.broadcast_to @message.channel,
        type: 'DESTROY_MESSAGE',
        id: @message.id

      ChatsChannel.broadcast_to @message.chat,
        type: 'DESTROY_MESSAGE',
        id: @message.id
      
      @message.destroy
      
      render json: nil, status: :ok
    else
      render json: nil, status: :not_found
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
