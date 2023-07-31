class CreateChannels < ActiveRecord::Migration[7.0]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :description
      t.references :workspace, foreign_key: { to_table: :workspaces }, index: true
      t.references :owner, foreign_key: { to_table: :users }, index: true

      t.timestamps
    end
  end
end
