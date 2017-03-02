Rails.application.routes.draw do
  root 'static_pages#show'

  get 'auth/google_oauth2', as: 'google_auth'
  get 'auth/:provider/callback' => 'sessions/create'

  get 'sessions/destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
