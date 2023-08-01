class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.references :author, foreign_key: { to_table: :users }, null: false, index: true
      t.references :workspace, foreign_key: { to_table: :workspaces }, null: false, index: true

      t.timestamps
    end

    create_table :channel_messages do |t|
      t.references :channel, foreign_key: true, null: false, index: true
      t.references :message, foreign_key: true, null: false, index: true
    end
  end
end
