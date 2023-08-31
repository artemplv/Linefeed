# == Schema Information
#
# Table name: chats
#
#  id                :bigint           not null, primary key
#  interlocutor_1_id :bigint           not null
#  interlocutor_2_id :bigint           not null
#  workspace_id      :bigint           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Chat < ApplicationRecord
  validates :workspace_id, :interlocutor_1_id, :interlocutor_2_id,
    presence: true
  
  validates_uniqueness_of :interlocutor_1_id, :scope => [:interlocutor_2_id, :workspace_id]

  belongs_to :interlocutor_1,
    class_name: 'User'

  belongs_to :interlocutor_2,
    class_name: 'User'

  belongs_to :workspace,
    class_name: 'Workspace'

  has_many :chat_messages,
    dependent: :destroy
  has_many :messages,
    through: :chat_messages

  def get_interlocutor_id(current_user)
    participants = [self.interlocutor_1_id, self.interlocutor_2_id]
    participants.find { |user_id| user_id != current_user.id } || participants.first
  end

  attr_accessor :interlocutor
end
