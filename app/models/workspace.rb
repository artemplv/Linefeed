# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Workspace < ApplicationRecord
  belongs_to :owner,
    class_name: 'User'

  has_many :workspace_users,
    dependent: :destroy
  has_many :users,
    through: :workspace_users
  end
