class Api::V1::BooksController < ApplicationController
  def index
    @books = Book.all

    render json: @books
  end

  def show
    @book = Book.find(params[:id])

    render json: @book
  end

  def update
  end

  def destroy
  end

  def create
  end

  def search
    # GoogleAPIService.search
  end
end
