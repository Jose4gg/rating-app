FactoryBot.define do
  factory :review do
    rating { 5 }
    details  { 'Great Product' }
    product do
      create(:product)
    end
  end
end
