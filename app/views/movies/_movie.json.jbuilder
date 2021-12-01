json.extract! movie, :id, :title, :release, :reception, :description, :watch, :created_at, :updated_at
json.url movie_url(movie, format: :json)
