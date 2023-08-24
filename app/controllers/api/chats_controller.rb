class Api::ChatsController < ApplicationController
  wrap_parameters include: Chat.attribute_names + ['interlocutor']

  before_action :require_logged_in
  before_action :ensure_user_self_chat, only: [:index]

  def show
    @chat = Chat.find(params[:id])

    @chat.interlocutor = User.find(@chat.get_interlocutor_id(current_user))

    render :show
  end

  def index
    workspace_id = params[:workspace_id]

    @chats = Chat
      .where('workspace_id = ?', workspace_id)
      .where('? IN (interlocutor_1_id, interlocutor_2_id)', current_user.id)
    
    render :index
  end

  def create
    workspace_id = params[:workspace_id]

    initiator_id = current_user.id
    interlocutor_id = chat_params.interlocutor

    participants = [initiator_id, interlocutor_id].sort
    
    @chat = Chat.new({
      interlocutor_1_id: participants[0],
      interlocutor_2_id: participants[1],
      workspace_id: workspace_id,
    })
    
    if @chat.save
      @chat.interlocutor = User.find(interlocutor_id)

      render :show
    else
      @errors = @chat.errors
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  def destroy
    @chat = Chat.find(params[:id])

    if @chat.destroy
      render json: { message: 'success' }
    else
      render 'api/errors/validation_errors', status: :unprocessable_entity
    end
  end

  private

  def chat_params
    params.require(:chat).permit(:interlocutor)
  end


  def ensure_user_self_chat
    workspace_id = params[:workspace_id]
    
    chat = Chat
      .where('workspace_id = ?', workspace_id)
      .where('interlocutor_1_id = ? AND interlocutor_2_id = ?', current_user.id, current_user.id)

    if chat.blank?
      Chat.create({
        workspace_id: workspace_id,
        interlocutor_1_id: current_user.id,
        interlocutor_2_id: current_user.id,
      })
    end
  end
end
