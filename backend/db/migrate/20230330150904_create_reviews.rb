class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :author, null: false, foreign_key: { on_delete: :cascade }
      t.references :book, null: false, foreign_key: { on_delete: :cascade }
      t.text :text

      t.timestamps
    end
  end
end
