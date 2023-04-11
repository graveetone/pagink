class CreateBookmatesRelations < ActiveRecord::Migration[7.0]
  def change
    create_table :bookmates_relations do |t|
      t.integer :bookmate_id, foreign_key: { to_table: :users }
      t.integer :bookmatee_id, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
