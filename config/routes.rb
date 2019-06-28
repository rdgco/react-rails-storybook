Rails.application.routes.draw do
  root :to => 'hello_world#index'
  resources :hello_world
end
