json.extract! workspace, :id, :name, :owner_id

json.pictureUrl workspace.picture.attached? ? workspace.picture.url : nil

json.users do
  json.array! workspace.workspace_users.pluck :user_id
end

json.channels do
  json.array! workspace.channels.pluck :id
end
