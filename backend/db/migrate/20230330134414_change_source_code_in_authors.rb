class ChangeSourceCodeInAuthors < ActiveRecord::Migration[7.0]
  def change
    remove_column :authors, :source_code
    add_column :authors, :source_code, :string, default: 'MANUAL', null: false
  end
end
