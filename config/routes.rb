Rails.application.routes.draw do
  devise_for :users,
             controller: {
               omniauth_callbacks: "users/omniauth_callbacks"
             }
end
