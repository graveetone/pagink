class ChangeBooksBooksListsTableToBooksShelves < ActiveRecord::Migration[7.0]
  def change
    rename_index :books_books_lists, 'index_books_books_lists_on_book_id', 'index_books_shelves_on_book_id'
    rename_index :books_books_lists, 'index_books_books_lists_on_books_list_id', 'index_books_shelves_on_books_list_id'
    
    rename_column :books_books_lists, :books_list_id, :shelve_id
    rename_table :books_books_lists, :books_shelves    
  end
end
