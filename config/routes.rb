Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :workspaces, only: [:index, :show, :update, :create] do
      resources :users, only: [:index]
      resources :channels, only: [:index, :create]
      resources :messages, only: [:index, :create]
    end
    resources :channels, only: [:update, :destroy]
    resources :messages, only: [:destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
