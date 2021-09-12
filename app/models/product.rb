# frozen_String_literal: true

class Product < ApplicationRecord
  validates :name, presence: true

  has_many :reviews

  attribute :rating, :float

  def rating
    @rating = reviews.average(:rating)
  end
end
