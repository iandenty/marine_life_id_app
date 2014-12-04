class Identification < ActiveRecord::Base
  attr_accessible :common_name, :family, :image_id, :number, :suborder, :user_id
  belongs_to :image
  belongs_to :user

  #---------------------------------------------------
  #Identification logic
  #---------------------------------------------------
def new_identification?
  common_name.exist?
end


def is_positive_identification?

end

end
