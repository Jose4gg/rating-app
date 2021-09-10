require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  test 'should save with all value properties' do
    review = build(:review)
    assert review.save
  end

  test 'should not save without details' do
    review = build(:review, details: nil)
    assert_not review.save
    assert_equal [:details], review.errors.attribute_names
  end

  test 'should not save without rating' do
    review = build(:review, rating: nil)
    assert_not review.save
    assert_equal [:rating], review.errors.attribute_names
  end

  test 'should not save with an invalid rating' do
    review = build(:review, rating: 6)
    assert_not review.save
    assert_equal [:rating], review.errors.attribute_names
  end

  test 'should not save without product' do
    review = build(:review, product: nil)
    assert_not review.save
    assert_equal [:product], review.errors.attribute_names
  end
end
