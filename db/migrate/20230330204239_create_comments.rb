class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.references :author, foreign_key: { to_table: :users }, null: false
      t.string :commentable_type
      t.integer :commentable_id

      t.timestamps
    end
    add_index :comments, :commentable_id
  end
end
