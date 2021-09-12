class ProductsController < ApplicationController
  def index
    @product = Product.first
    render component: 'ProductDetails'
  end

  def create_review
    @product = Product.find(params[:product_id])
  end
end
