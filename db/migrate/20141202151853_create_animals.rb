class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.string :order
      t.string :suborder
      t.string :family
      t.string :common_name
      t.string :scientific_name
      t.text :image

      t.timestamps
    end
  end
end
