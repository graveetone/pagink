class CreateGinks < ActiveRecord::Migration[7.0]
  def change
    create_table :ginks do |t|
      t.references :author, foreign_key: { to_table: :users }, null: false
      t.text :text

      t.timestamps
    end
  end
end
