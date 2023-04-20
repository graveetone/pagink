Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions:      'users/sessions',
    registrations: 'users/registrations'
  }

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
      get 'current_user', to: 'current_user#index'
    end
  end

  root 'welcome#index'
end
