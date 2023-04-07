Rails.application.routes.draw do
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

  root 'application#index'
end
