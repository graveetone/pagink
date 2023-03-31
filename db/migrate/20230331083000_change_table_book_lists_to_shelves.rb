class ChangeTableBookListsToShelves < ActiveRecord::Migration[7.0]
  def change
    rename_table :books_lists, :shelves
  end
end
