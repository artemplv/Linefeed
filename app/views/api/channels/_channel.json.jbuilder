json.extract! channel, :id, :name, :description, :owner_id

# json.users do
#   json.array! workspace.workspace_users.pluck :user_id
# end
json.messages do
  json.array! channel.messages.pluck :id
end
