# frozen_String_literal: true

class Product < ApplicationRecord
  validates :name, presence: true
end