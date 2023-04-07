class CreateBooksList < ActiveRecord::Migration[7.0]
  def change
    create_table :books_lists do |t|
      t.string :title, null: false
      t.boolean :is_private, default: true, null: false
      
      t.references :author, foreign_key: { to_table: :users, on_delete: :cascade }

      t.timestamps
    end
  end
end
