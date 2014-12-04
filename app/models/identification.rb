class Identification < ActiveRecord::Base
  attr_accessible :common_name, :family, :image_id, :number, :suborder, :user_id
  belongs_to :image
  belongs_to :user

  #---------------------------------------------------
  #Identification logic
  #---------------------------------------------------

def self.is_practice_correct?(params)
  Image.find(params[:image_id]).species == params[:identification][:common_name]
end


def is_positive_identification?

end

end
