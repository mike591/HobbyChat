Rails.application.routes.draw do
  get 'room/show'

  get 'boards/index'
  get '/show_current_user', to: 'sessions#show_current_user'

  root to: 'home#show'

  get 'dashboard', to: 'static_pages#show'

  get 'auth/google_oauth2', as: 'google_auth'
  get 'auth/:provider/callback', to: 'sessions#create'

  get 'signout', to: 'sessions#destroy', as: 'signout'

  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
