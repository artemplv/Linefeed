# == Schema Information
#
# Table name: workspace_users
#
#  id           :bigint           not null, primary key
#  workspace_id :bigint           not null
#  user_id      :bigint           not null
#
class WorkspaceUser < ApplicationRecord
  belongs_to :user
  belongs_to :workspace
end
