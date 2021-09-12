class ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review.to_json(include: :product)
    else
      render json: { message: 'Something went wrong.' }
    end
  end

  private

  def review_params
    params.require(:review).permit(:details, :rating, :product_id)
  end
end
