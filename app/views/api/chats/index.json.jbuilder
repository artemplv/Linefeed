json.chats do
  json.array! @chats.pluck :id
end