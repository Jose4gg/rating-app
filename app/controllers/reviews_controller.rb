class ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review
    else
      render json: { message: 'Something went wrong.' }
    end
  end

  private

  def review_params
    params.require(:review).permit(:details, :rating, :product_id)
  end
end
