class Image < ActiveRecord::Base
  attr_accessible :date_time, :image, :lat, :long, :species, :status, :user_id
  belongs_to :user
  mount_uploader :image, ImageUploader
  validates :image, presence: true
  before_save :extract_exif

  def extract_exif
    path = File.join(Rails.root, "public", self.image.url)
    exif_data = EXIFR::JPEG.new(path)
    if exif_data.gps?
      self.date_time = exif_data.date_time
      self.lat = exif_data.gps_lat
      self.long = exif_data.gps_lng
    end
  end
end
