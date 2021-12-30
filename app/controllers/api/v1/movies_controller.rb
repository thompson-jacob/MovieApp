class Api::V1::MoviesController < ApplicationController

  before_action :set_movie, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

  # GET /movies
  # GET /movies.json
  def index 
    @movies = Movie.all.order(title: :asc)
    render json: @movies
  end

  # GET /movies/1
  # GET /movies/1.json
  def show 
    if @movie
      render json: @movie
    else
      render json: @movie.errors
    end
  end

  # GET /movies/new
  def new
    @movie = Movie.new
  end
  
  # GET /movies/1/eedit
  def edit
  end

  #POST /movies
  #POST /movies.json
  def create
    @movie = Movie.new(movie_params)
    puts "movie_params = #{movie_params}"

    if @movie.save
      puts "#### MOVIE from create in saved = #{@movie.title}"
      render json: @movie
    else 
      render json: @movie.errors
    end
  end

  #PATCH/PUT /movies/1
  #PATCH/PUT /movies/1.json
  def update
  end

  # DELETE /movies/1
  # DELETE /movies/1.json
  def destroy
    @movie.destroy

    render json: { notice: 'Movie was successfully removed.' }
  end

  private
  # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movie_params
      params.permit(:title, :release, :reception, :description, :watch)
    end
  

end
