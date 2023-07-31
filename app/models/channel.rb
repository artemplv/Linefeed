# == Schema Information
#
# Table name: channels
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :text
#  workspace_id :bigint           not null
#  owner_id     :bigint
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Channel < ApplicationRecord
  validates :name, :workspace_id,
    presence: true

  belongs_to :owner,
    class_name: 'User'

  belongs_to :workspace,
    class_name: 'Workspace'
end
