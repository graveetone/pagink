class CreateBooksListsBooksJoinTable < ActiveRecord::Migration[7.0]
  def change
    create_join_table :books_lists, :books do |t|
      t.index :book_id
      t.index :books_list_id
    end
  end
end
