class CreateIdentifications < ActiveRecord::Migration
  def change
    create_table :identifications do |t|
      t.integer :number
      t.string :suborder
      t.string :family
      t.string :common_name
      t.integer :user_id
      t.integer :image_id

      t.timestamps
    end
  end
end
