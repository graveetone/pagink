class AddPersistentColumnToBooks < ActiveRecord::Migration[7.0]
  def change
    add_column :books, :persistent, :boolean, default: true, null: false
  end
end
