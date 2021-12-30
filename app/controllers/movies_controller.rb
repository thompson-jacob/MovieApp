class MoviesController < ApplicationController
  

  before_action :set_movie, only: %i[ show edit update destroy ]

  # GET /movies or /movies.json
  def index
  end
end
