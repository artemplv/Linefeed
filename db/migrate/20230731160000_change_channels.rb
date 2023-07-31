class ChangeChannels < ActiveRecord::Migration[7.0]
  def change
    change_column_null :channels, :workspace_id, false
  end
end
