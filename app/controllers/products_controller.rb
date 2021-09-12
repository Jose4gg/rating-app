class ProductsController < ApplicationController
  def index
    @product = Product.find_or_create_by(name: 'Mean Machine Book')
  end

  def create_review
    @product = Product.find(params[:product_id])
  end
end
