Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    
    resource :session, only: [:show, :create, :destroy]
    
    resources :workspaces, only: [:index, :show, :update, :create, :destroy] do
      resources :users, only: [:index]
      resources :channels, only: [:index, :create] do
        resources :messages, only: [:create]
      end
      resources :chats, only: [:index, :create] do
        resources :messages, only: [:create]
      end
      get '/search', to: 'workspaces#search'
    end
    
    resources :channels, only: [:show, :update, :destroy] do
      resources :messages, only: [:index]
    end
    
    resources :chats, only: [:show, :destroy] do
      resources :messages, only: [:index]
    end
    
    resources :messages, only: [:destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
