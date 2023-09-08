class RecommendationsService
  DEFAULT_RECOMMENDATION_ITEMS_COUNT = 5

  def initialize
    @recommender = Disco::Recommender.new(top_items: true)
    @trained = true
    @recommender.fit(data)
  rescue ArgumentError
    @trained = false
  end

  def books_from_similar_users(user, count: DEFAULT_RECOMMENDATION_ITEMS_COUNT)
    return [] unless @trained

    result = @recommender.user_recs(user.id, count: count)

    get_recommended_books(result)
  end

  def similar_items(item, count: DEFAULT_RECOMMENDATION_ITEMS_COUNT)
    return [] unless @trained

    result = @recommender.item_recs(item.id, count: count)

    get_recommended_books(result)
  end

  private

  def data
    items = users.map do |user|
      books = user.shelves.reject do |shelve|
                shelve.title == 'Recommendations'
              end.map { |shelve| shelve.books }.flatten.uniq

      items = books.map do |book|
        {
          user_id: user.id,
          item_id: book.id
        }
      end
    end

    items.flatten
  end

  def users
    User.includes(shelves: :books).all
  end

  def get_uniq_books(shelve)
    shelve.books.flatten.uniq
  end

  def get_recommended_books(result)
    Book.where(id: result.pluck(:item_id))
  end
end