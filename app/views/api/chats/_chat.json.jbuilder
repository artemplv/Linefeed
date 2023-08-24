json.extract! chat, :id

json.interlocutor_id chat.get_interlocutor_id(@current_user)

json.messages do
  json.array! chat.messages.pluck :id
end
