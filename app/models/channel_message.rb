# == Schema Information
#
# Table name: channel_messages
#
#  id         :bigint           not null, primary key
#  channel_id :bigint           not null
#  message_id :bigint           not null
#
class ChannelMessage < ApplicationRecord
  belongs_to :message
  belongs_to :channel
end
