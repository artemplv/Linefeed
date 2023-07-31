class Channel < ApplicationRecord
  belongs_to :owner,
    class_name: 'User'

  belongs_to :workspace,
    class_name: 'Workspace'
end
