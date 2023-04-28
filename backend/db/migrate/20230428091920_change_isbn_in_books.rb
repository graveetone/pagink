class ChangeIsbnInBooks < ActiveRecord::Migration[7.0]
  def change
    remove_column :books, :isbn
    add_column :books, :isbn, :string
  end
end
