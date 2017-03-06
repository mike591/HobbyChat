Rails.application.routes.draw do
  root to: 'home#show'

  get 'static_pages/show'

  get 'auth/google_oauth2', as: 'google_auth'
  get 'auth/:provider/callback', to: 'sessions#create'

  get 'signout', to: 'sessions#destroy', as: 'signout'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
