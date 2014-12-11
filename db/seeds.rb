# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

identification_image_src_array = Dir.glob("db/identify_images/*.jpg")
guess_image_src_array = Dir.glob("db/practice_images/*.jpg")

identification_image_src_array.each do |id_image|
  file_name = File.basename(id_image)
  Image.create({
    image: File.open(File.join(Rails.root, "db", "identify_images", file_name)),
    user_id: rand(1..5),
    lat: Faker::Address.latitude,
    long: Faker::Address.longitude,
    date_time: Faker::Time.between(2.days.ago, Time.now),
    status: "unverified",
    species: Animal.order("RANDOM()").first.common_name
    })
end

guess_image_src_array.each do |guess_image|
  file_name = File.basename(guess_image)
  Image.create({
    image: File.open(File.join(Rails.root, "db", "practice_images", file_name)),
    user_id: rand(1..5),
    lat: Faker::Address.latitude,
    long: Faker::Address.longitude,
    date_time: Faker::Time.between(2.days.ago, Time.now),
    status: "reviewed",
    species: Animal.order("RANDOM()").first.common_name
    })
end