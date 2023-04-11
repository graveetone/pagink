class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.integer :pages_count, default: 0
      t.string :source_code, default: 'MANUAL'
      t.string :isbn, null: false
      t.text :description

      t.timestamps
    end
  end
end
