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
    if search_params[:global]
      books = GoogleBooksSearchService.new(
        query: search_params[:value],
        page: search_params[:page] || 1
      ).search

      render json: books
    else
      books = Book.search(search_params[:value])
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
    params.require(:book).permit(source: [:type, :id])
  end

  def search_params
    params.require(:query).permit(:value, :global, :page)
  end
end
