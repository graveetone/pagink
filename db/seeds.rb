# require 'faker'

# delete_data_and_puts_info = ->(model) do
#     puts "Deleting #{model.name} data"
#     model.delete_all
# end

# puts 'Deleting all data'
# models = [User]
# models.each { |model| delete_data_and_puts_info.call(model) }


user = User.create(username: 'member1', email: 'member1@pagink.com')
shelve = Shelve.create(title: 'Read books', author: user)
author = Author.create(name: "Макс Кідрук")
publisher = Publisher.create(name: 'Видавництво Бородатий Тамарин')
book = Book.create(title: 'Колонія', pages_count: 904, isbn: '123456789', description: "Класна книжка", publisher: publisher)
author.books << book
shelve.books << book
gink = Gink.create(title: "My first gink", text: 'Can you imagine this???', author: user)
review = Review.create(text: 'My favourite book', author: user, book: book)

gink_comment = Comment.create(author: user, text: 'nice gink')
review_comment = Comment.create(author: user, text: 'nice review')
comment_comment = Comment.create(author: user, text: 'nice comment')

gink.comments << gink_comment
review.comments << review_comment
review_comment.comments << comment_comment

review_like = Like.create(user: user)
comment_like = Like.create(user: user)
gink_like = Like.create(user: user)

review.likes << review_like
review_comment.likes << comment_like
gink.likes << gink_like

sender = User.create(username: 'member2', email: "member2@pagink.com")

message = Message.create(author: sender, recipient: user, text: 'Hello, nice to meet u')
raiting = Raiting.create(author: user, book: book, value: 5)
raiting = Raiting.create(author: sender, book: book, value: 2)

notification = Notification.create(title: 'You have new notification', payload: "1 new notification", user: user)
book_image_link = ImageLink.create(url: 'link for book')
user_image_link = ImageLink.create(url: 'link for user')

book.image_link = book_image_link
user.image_link = user_image_link

puts 'Data created'