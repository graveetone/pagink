class Api::V1::StatisticsController < ApplicationController
  def index
    users_count = User.count
    books_read = Book.count
    texts_count = [Gink, Review, Comment].map { |model| model.count }.sum

    render json: {
      users_count: users_count,
      books_read: books_read,
      texts_count: texts_count
    }
  end
end
