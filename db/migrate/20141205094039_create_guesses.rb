class CreateGuesses < ActiveRecord::Migration
  def change
    create_table :guesses do |t|
      t.string :suborder
      t.string :family
      t.string :common_name
      t.integer :user_id
      t.integer :image_id
      t.boolean :correct

      t.timestamps
    end
  end
end
