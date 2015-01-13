class Image < ActiveRecord::Base
  attr_accessible :date_time, :image, :lat, :long, :species, :status, :user_id, :identifications_attributes
  belongs_to :user
  has_many :identifications
  has_many :guesses
  accepts_nested_attributes_for :identifications
  mount_uploader :image, ImageUploader
  validates :image, presence: true
  before_save :extract_exif

  #-----------------------------------------------------
    # Extract exif information from image
  #-----------------------------------------------------
  def extract_exif
    is_on_aws = (/^http/.match(self.image.url)).present? ? path = self.image.url : path = File.join(Rails.root, "public", self.image.url)
    # path = File.join(Rails.root, "public", self.image.url)
    exif_data = EXIFR::JPEG.new(path)
    if exif_data.gps?
      self.date_time = exif_data.date_time
      self.lat = exif_data.gps_lat
      self.long = exif_data.gps_lng
    end
  end
  #-----------------------------------------------------
    # PRACTICE: Image is available for practice and randomised
  #-----------------------------------------------------
  def self.reviewed_images
    Image.order("RANDOM()").where(status: "reviewed").first if Image.where(status: "reviewed").count > 1
  end
#-----------------------------------------------------
  # IDENTIFICATION: Image is available for user identification and randomised
#-----------------------------------------------------
  def self.generate_random_image(current_user)
    Image.order("RANDOM()").where(status: "unverified").where('user_id != ?', current_user).first if Image.where(status: "unverified").where('user_id != ?', current_user).count > 1
  end
#-----------------------------------------------------
end