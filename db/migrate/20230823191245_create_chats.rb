class CreateChats < ActiveRecord::Migration[7.0]
  def change
    create_table :chats do |t|
      t.references :interlocutor_1, foreign_key: { to_table: :users }, index: false, null: false
      t.references :interlocutor_2, foreign_key: { to_table: :users }, index: true, null: false
      t.references :workspace, foreign_key: { to_table: :workspaces }, index: true, null: false

      t.timestamps
    end

    add_index :chats, [:interlocutor_1_id, :interlocutor_2_id], unique: true

    create_table :chat_messages do |t|
      t.references :chat, foreign_key: true, null: false, index: true
      t.references :message, foreign_key: true, null: false, index: true
    end
  end
end
