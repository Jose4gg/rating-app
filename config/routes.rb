Rails.application.routes.draw do
  get '/' => 'products#index'
  get 'product/:product_id/review/create' => 'products#create_review', as: :create_review
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
