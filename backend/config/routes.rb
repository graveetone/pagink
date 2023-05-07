Rails.application.routes.draw do
  devise_for :users, path: '', path_names: {
                                 sign_in: 'login',
                                 sign_out: 'logout',
                                 registration: 'signup'
                               },
                     controllers: {
                       sessions: 'users/sessions',
                       registrations: 'users/registrations'
                     }

  namespace :api do
    namespace :v1 do
      resources :shelves
      resources :reviews do
        member do
          get :comments
        end
      end
      resources :publishers
      resources :notifications
      resources :messages
      resources :ginks do
        member do
          get :comments
        end
      end
      resources :comments
      resources :authors do
        member do
          get :books
        end
      end
      resources :books do
        collection do
          get 'search'
        end
        member do
          get :reviews
        end
      end
      resources :users do
        member do
          get :bookmatees_posts
          get :posts
          get :related_users
          get :shelves
          post :follow
          delete :unfollow
        end
      end
      get 'current_user', to: 'current_user#index'
      get 'statistics', to: 'statistics#index'
      get 'validate_username', to: 'validations#username'
      get 'validate_email', to: 'validations#email'

      post :likes, to: 'likes#like'
      delete :likes, to: 'likes#unlike'
    end
  end

  root 'welcome#index'
end
