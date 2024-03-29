class AddBooksPublisherReference < ActiveRecord::Migration[7.0]
  def change
    change_table :books do |t|
      t.references :publisher, foreign_key: { to_table: :publishers, on_delete: :nullify }
    end
  end
end
