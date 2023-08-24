json.extract! chat, :id, :interlocutor_id

json.messages do
  json.array! channel.messages.pluck :id
end
