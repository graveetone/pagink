class CreateImageLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :image_links do |t|
      t.string :url
      t.string :imageable_type
      t.integer :imageable_id

      t.timestamps
    end
    add_index :image_links, :imageable_id
  end
end
