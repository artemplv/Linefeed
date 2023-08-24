class Api::ChatsController < ApplicationController
  wrap_parameters include: Chat.attribute_names + ['interlocutor']

  before_action :require_logged_in

  def show
    @chat = Chat.find(params[:id]).includes(:messages)

    participants = [@chat.interlocutor_1_id, @chat.interlocutor_2_id]
    @chat.interlocutor_id = participants.reject { |user_id| user_id == current_user.id }

    render :show
  end

  def create
    workspace_id = params[:workspace_id]

    initiator_id = current_user.id
    interlocutor_id = chat_params.interlocutor

    participants = [initiator_id, interlocutor_id].sort
    
    @chat = Chat.new({
      interlocutor_1_id: interlocutors[0],
      interlocutor_2_id: interlocutors[1],
      workspace_id: workspace_id,
    })

    if @chat.save
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
end
