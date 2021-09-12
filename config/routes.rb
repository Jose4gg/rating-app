Rails.application.routes.draw do
  get '/' => 'products#index'
  post 'reviews/create'

  get '/product_with_reviews' => 'products#product_with_reviews'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
