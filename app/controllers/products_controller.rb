class ProductsController < ApplicationController
  def index
    @product = Product.first
  end
end
