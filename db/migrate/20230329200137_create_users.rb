class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, unique: true, null: false
      t.string :email, unique: true, null: false
      t.datetime :last_seen
      t.string :status, default: 'ACTIVE', null: false
      t.integer :login_counts, default: 0, null: false

      t.timestamps
    end
  end
end
