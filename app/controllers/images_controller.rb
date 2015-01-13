class ImagesController < ApplicationController
  # GET /images
  # GET /images.json
  def index
    # @image = Image.reviewed_images
    # @identification = Identification.new
    # @guess = Guess.new


    # IDENTIFICATION: logic for identification
    # @image = Image.generate_random_image(current_user.id)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @images }
    end
  end

  def identify
    @image = Image.generate_random_image(current_user.id)
    @identification = Identification.new
    render partial: "identify"
  end

  def practice
    @image = Image.reviewed_images
    @guess = Guess.new
    render partial: "practice"

  end

  def explore
    # render partial: "explore"
    explore = Image.where(status: "reviewed")
    render json: explore
  end

  # GET /images/1
  # GET /images/1.json
  def show
    @image = Image.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @image }
    end
  end

  # GET /images/new
  # GET /images/new.json
  def new
    @image = Image.new

    render partial: "form"

    # respond_to do |format|
    #   format.html # new.html.erb
    #   format.json { render json: @image }
    # end
  end

  # GET /images/1/edit
  def edit
    @image = Image.find(params[:id])
  end

  # POST /images
  # POST /images.json
  def create
    @image = Image.new(params[:image])
    @image.user_id = current_user.id
    @image.status = "unverified"

    respond_to do |format|
      if @image.save
        if @image.date_time.nil? || @image.lat.nil? || @image.long.nil?
          format.html { render action: "edit" }
        else
          format.html { redirect_to images_path }
          format.json { render json: @image, status: :created, location: @image }
        end
      else
        format.html { render action: "new" }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /images/1
  # PUT /images/1.json
  def update
    @image = Image.find(params[:id])

    respond_to do |format|
      if @image.update_attributes(params[:image])
        format.html { redirect_to images_path, notice: '' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @image.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /images/1
  # DELETE /images/1.json
  def destroy
    @image = Image.find(params[:id])
    @image.destroy

    respond_to do |format|
      format.html { redirect_to images_url }
      format.json { head :no_content }
    end
  end
end
