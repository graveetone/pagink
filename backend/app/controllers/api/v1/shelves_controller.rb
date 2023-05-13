class Api::V1::ShelvesController < ApplicationController
  def index
    @shelves = Shelve.all

    render json: @shelves
  end

  def show
    @shelve = Shelve.includes(author: :image_link, books: [:image_link, authors: :image_link]).find(params[:id])

    render json: @shelve
  end

  def create
    @shelve = Shelve.find_or_create_by(
      author_id: current_user.id,
      title: params[:title]
    )

    render json: @shelve
  end

  def add_book
    @shelve = Shelve.includes(:books).find(params[:shelveId])
    @book = Book.find(params[:bookId])
    
    unless @shelve.books.include?(@book)
      @shelve.books << @book
      render json: @shelve
    end
  end
end
