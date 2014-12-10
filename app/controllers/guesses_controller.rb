class GuessesController < ApplicationController
  before_filter :set_guess, only: [:show, :edit, :update, :destroy]
  respond_to :html, :xml, :json

  def index
    @guesses = Guess.all
    respond_with(@guesses)
    @image = Image.reviewed_images
  end

  def show
    respond_with(@guess)
  end

  def new
    @guess = Guess.new
    # respond_with(@guess)
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @guess }
    end
  end

  def edit
  end

  def create
    @image = Image.find(params[:image_id])
    @guess = @image.guesses.new(params[:guess])
    @guess.user_id = current_user.id

    respond_to do |format|
      if @guess.save
        format.html { redirect_to image_guesses_path, notice: 'Guess was successfully created.' }
        format.json { render json: @guess, status: :created, location: @guess }
      else
        format.html { render action: "new" }
        format.json { render json: @guess.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @guess.update_attributes(params[:guess])
    respond_with(@guess)
  end

  def destroy
    @guess.destroy
    respond_with(@guess)
  end
end
