class Guess < ActiveRecord::Base
  attr_accessible :common_name, :correct, :family, :image_id, :suborder, :user_id
  belongs_to :users
  belongs_to :images

  def is_practice_correct?(params)
    Image.find(params[:image_id]).species == params[:guess][:common_name]
  end
end
