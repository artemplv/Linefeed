# == Schema Information
#
# Table name: messages
#
#  id           :bigint           not null, primary key
#  body         :text             not null
#  author_id    :bigint           not null
#  workspace_id :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
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

  has_one :chat_message,
    dependent: :destroy

  has_one :chat,
    through: :chat_message
end
