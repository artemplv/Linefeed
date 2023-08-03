# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Workspace < ApplicationRecord
  validates :name, presence: true

  belongs_to :owner,
    class_name: 'User'

  has_many :workspace_users,
    dependent: :destroy
  has_many :users,
    through: :workspace_users

  has_many :channels,
    dependent: :destroy

  has_one_attached :picture
  end
