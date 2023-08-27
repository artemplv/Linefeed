class ChatsChannel < ApplicationCable::Chat
  def subscribed
    @chat = Chat.find(params[:id])
    stream_for @chat
  end
end