class ChangeWorkspaces < ActiveRecord::Migration[7.0]
  def change
    change_column_null :workspaces, :owner_id, true
  end
end
