class AnimalsController < ApplicationController
  respond_to :html, :xml, :json
  def index
    common_names = Animal.where(suborder: params[:family])
    render json: common_names
  end

  def family
    family = Animal.select('DISTINCT family').order(:family).where(suborder: params[:suborder])
    render json: family
  end

  def common
    common = Animal.select('DISTINCT common_name').order(:common_name).where(family: params[:family])
    render json: common
  end
end