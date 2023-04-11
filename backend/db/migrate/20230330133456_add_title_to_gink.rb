class AddTitleToGink < ActiveRecord::Migration[7.0]
  def change
    change_table :ginks do |t|
      t.string :title
    end
  end
end
