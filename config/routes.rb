Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'movies/index'
      post 'movies/create'
      delete 'movies/:id', to: 'movies#destroy'
    end
  end
  root 'movies#index'
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  # namespace :api do
  #   get "/photos" => "photos#index"
  # end
end
