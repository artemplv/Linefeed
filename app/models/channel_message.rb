# == Schema Information
#
# Table name: workspace_users
#
#  id           :bigint           not null, primary key
#  workspace_id :bigint           not null
#  user_id      :bigint           not null
#
class ChannelMessage < ApplicationRecord
  belongs_to :message
  belongs_to :channel
end
