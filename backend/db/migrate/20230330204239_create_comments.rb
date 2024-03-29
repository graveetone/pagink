class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.references :author, foreign_key: { to_table: :users, on_delete: :cascade }, null: false
      t.string :commentable_type
      t.integer :commentable_id
      t.references :origin, foreign_key: { to_table: :comments, on_delete: :cascade}, optional: true

      t.timestamps
    end
    add_index :comments, :commentable_id
  end
end
