Rails.application.routes.draw do
  namespace :api do
    resources :shares
  end

  devise_for :users, controller: { omniauth_callbacks: "users/omniauth_callbacks" }

  get '/dashboard' to: 'welcome#dashboard'
  root to: 'welcome#index'
end
