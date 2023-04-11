class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.references :author, foreign_key: { to_table: :users, on_delete: :nullify }
      t.references :recipient, foreign_key: { to_table: :users, on_delete: :nullify }
      t.string :text

      t.timestamps
    end
  end
end
