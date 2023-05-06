class Api::V1::BooksController < ApplicationController
  before_action :set_book, only: %i[show reviews]
  def index
    @books = Book.all

    render json: @books
  end

  def show
    render json: @book
  end

  def reviews
    reviews = @book.reviews.order(created_at: :desc)

    render json: serialize_collection(reviews, ReviewOfBookSerializer)
  end

  def update; end

  def destroy; end

  def create
    response = case book_params[:source][:type]
               when 'GB_API'
                 respond_with_gb_api
               when 'MANUAL'
                 render json: 'To be done'
               else
                 render json: PaginkErrorBuilder.new(:wrong_book_source_type).render
               end
  end

  def search
    if params[:global] == '1'
      books = GoogleBooksSearchService.new(
        query: params[:query],
        page: params[:page] || 1
      ).search

      render json: books
    else
      books = Book.search(params[:query])

      render json: books, each_serializer: SearchBookSerializer
    end
  end

  private

  def respond_with_gb_api
    response = GoogleBooksBookCreatorService.new(
      book_params[:source][:id]
    ).get_book

    render json: response
  end

  def book_params
    params.require(:book).permit(source: %i[type id])
  end

  def set_book
    @book = Book.find(params[:id])
  end
end
