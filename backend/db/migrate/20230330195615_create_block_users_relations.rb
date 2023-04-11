class CreateBlockUsersRelations < ActiveRecord::Migration[7.0]
  def change
    create_table :block_users_relations do |t|
      t.integer :blocker_id, foreign_key: { to_table: :users }
      t.integer :blockee_id, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
