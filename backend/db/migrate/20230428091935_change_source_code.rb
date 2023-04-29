class ChangeSourceCode < ActiveRecord::Migration[7.0]
  def change
    remove_column :authors, :source_code
    remove_column :books, :source_code
  end
end
