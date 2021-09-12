class ProductsController < ApplicationController
  def index
    render component: 'App'
  end

  def product_with_reviews
    product = Product.first
    render json: product.to_json(include: :reviews)
  end

  def create_review
    @product = Product.find(params[:product_id])
  end
end
