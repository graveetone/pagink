class CreateRaitings < ActiveRecord::Migration[7.0]
  def change
    create_table :raitings do |t|
      t.references :author, foreign_key: { to_table: :users, on_delete: :nullify }
      t.references :book, null: false, foreign_key: { on_delete: :cascade }
      t.integer :value

      t.timestamps
    end
  end
end
