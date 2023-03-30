class AddTextToComment < ActiveRecord::Migration[7.0]
  def change
    change_table :comments do |t|
      t.text :text, null: false
    end
  end
end
