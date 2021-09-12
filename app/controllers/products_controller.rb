class ProductsController < ApplicationController
  def index
    @product = Product.first
  end

  def create_review
    @product = Product.find(params[:product_id])
  end
end
