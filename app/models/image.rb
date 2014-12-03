class Image < ActiveRecord::Base
  attr_accessible :date_time, :image, :lat, :long, :species, :status, :user_id
  belongs_to :user
  has_many :identifications
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

  def extract_exif
    path = File.join(Rails.root, "public", self.image.url)
    exif_data = EXIFR::JPEG.new(path)
    if exif_data.gps?
      self.date_time = exif_data.date_time
      self.lat = exif_data.gps_lat
      self.long = exif_data.gps_lng
    end
  end

  # Image is available for user identification and randomised
  def is_image_available?
    self.status != "reviewed"
  end

  def has_user_identified?(current_user)
      self.identifications.exists?(user_id: current_user)
  end

  def self.generate_random_image(current_user)
    if Image.count > 1
      random_image = Image.order("RANDOM()").first
      select_random_image(random_image, current_user)
    else
      []
    end
  end

  def are_photos_left? 
      # TODO: NEED TO WRITE LOGIC HERE IF ALL PHOTOS HAVE BEEN IDENTIFIED
  end

  def self.select_random_image(random_image, current_user)
    if random_image.is_image_available? && random_image.has_user_identified?(current_user) == false
      @images = random_image
    else
      generate_random_image(current_user)
    end
  end
end
