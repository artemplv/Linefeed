json.chat do
  json.partial! 'api/chats/chat', chat: @chat
end

json.interlocutor do
  json.partial! 'api/users/user', user: @chat.interlocutor
end