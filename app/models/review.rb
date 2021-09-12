class Review < ApplicationRecord
  validates :details, presence: true
  validates :rating, presence: true, numericality: {
    only_integer: false,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }

  belongs_to :product

  after_create :deliver_new_review

  def deliver_new_review
    ActionCable.server.broadcast('review', to_json(include: :product))
  end
end
