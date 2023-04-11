class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :user, foreign_key: { to_table: :users, on_delete: :nullify }
      t.string :likeable_type
      t.integer :likeable_id

      t.timestamps
    end
    add_index :likes, :likeable_id
  end
end
