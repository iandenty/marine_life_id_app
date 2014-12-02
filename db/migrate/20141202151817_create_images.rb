class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :user_id
      t.string :date_time
      t.string :image
      t.float :lat
      t.float :long
      t.string :species
      t.string :status

      t.timestamps
    end
  end
end
