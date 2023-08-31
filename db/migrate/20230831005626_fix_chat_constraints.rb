class FixChatConstraints < ActiveRecord::Migration[7.0]
  def change
    remove_index :chats, [:interlocutor_1_id, :interlocutor_2_id]
    
    add_index :chats, [:interlocutor_1_id, :interlocutor_2_id, :workspace_id],
      unique: true,
      name: 'index_chats_on_interlocutors_and_workspace_id'
  end
end
