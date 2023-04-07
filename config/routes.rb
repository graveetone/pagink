Rails.application.routes.draw do
  get 'authors/index'
  get 'authors/show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :shelves
      resources :reviews
      resources :publishers
      resources :notifications
      resources :messages
      resources :ginks
      resources :comments
      resources :authors
      resources :books
      resources :users
    end
  end
end
