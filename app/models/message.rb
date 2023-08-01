class Message < ApplicationRecord
  validates :body, :workspace_id, :author_id,
    presence: true

  belongs_to :author,
    class_name: 'User'

  belongs_to :workspace,
    class_name: 'Workspace'

  has_one :channel_message,
    dependent: :destroy

  has_one :channel,
    through: :channel_message
end
