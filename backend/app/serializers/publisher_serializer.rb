class PublisherSerializer < BaseSerializer
  attributes %i[id name books_count]

  def books_count
    object.books.count
  end
end
