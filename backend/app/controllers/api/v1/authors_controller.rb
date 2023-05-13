class Api::V1::AuthorsController < ApplicationController
  before_action :set_author, only: %w[show books]

  def index
    @authors = Author.all

    render json: @authors
  end

  def show
    render json: @author
  end

  def books
    books = @author.books

    render json: {
      count: books.count,
      books: serialize_collection(books, BookOfAuthorSerializer)
    }
  end

  private

  def set_author
    @author = Author.includes(:books, :image_link).find(params[:id])
  end
end
