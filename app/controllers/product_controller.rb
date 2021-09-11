class ProductController < ApplicationController
  def index
    @product = Product.first
  end
end
