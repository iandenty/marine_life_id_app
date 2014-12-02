class Animal < ActiveRecord::Base
  attr_accessible :common_name, :family, :image, :order, :scientific_name, :suborder

  CSV.foreach("cetaceans.csv", :headers => true) do |row|
    Animal.create!(row.to_hash)
  end
end
