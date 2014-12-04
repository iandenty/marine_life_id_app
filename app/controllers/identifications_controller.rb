class IdentificationsController < ApplicationController
  # GET /identifications
  # GET /identifications.json
  def index
    @identifications = Identification.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @identifications }
    end
  end

  # GET /identifications/1
  # GET /identifications/1.json
  def show
    @identification = Identification.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @identification }
    end
  end

  # GET /identifications/new
  # GET /identifications/new.json
  def new
    @identification = Identification.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @identification }
    end
  end

  # GET /identifications/1/edit
  def edit
    @identification = Identification.find(params[:id])
  end

  # POST /identifications
  # POST /identifications.json
  def create
    @identification = Identification.new(params[:identification])

    respond_to do |format|
      if @identification.save
        format.html { redirect_to @identification, notice: 'Identification was successfully created.' }
        format.json { render json: @identification, status: :created, location: @identification }
      else
        format.html { render action: "new" }
        format.json { render json: @identification.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /identifications/1
  # PUT /identifications/1.json
  def update
    @identification = Identification.find(params[:id])

    respond_to do |format|
      if @identification.update_attributes(params[:identification])
        format.html { redirect_to @identification, notice: 'Identification was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @identification.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /identifications/1
  # DELETE /identifications/1.json
  def destroy
    @identification = Identification.find(params[:id])
    @identification.destroy

    respond_to do |format|
      format.html { redirect_to identifications_url }
      format.json { head :no_content }
    end
  end
end
