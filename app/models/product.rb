# frozen_String_literal: true

class Product < ApplicationRecord
  validates :name, presence: true

  has_many :reviews

  def rating
    reviews.average(:rating)
  end
end
