class CreateWorkspaces < ActiveRecord::Migration[7.0]
  def change
    create_table :workspaces do |t|
      t.string :name, null: false
      t.references :owner, foreign_key: { to_table: :users }, null: false, index: true

      t.timestamps
    end

    create_table :workspace_users do |t|
      t.references :workspace, foreign_key: true, null: false, index: true
      t.references :user, foreign_key: true, null: false, index: true
    end
  end
end
