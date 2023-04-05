class String
  def red
    "\e[31m#{self}\e[0m"
  end

  def green
    "\e[32m#{self}\e[0m"
  end

  def yellow
    "\e[33m#{self}\e[0m"
  end

  def blue
    "\e[34m#{self}\e[0m"
  end
end
start_time = Time.now

delete_data_and_puts_info = lambda do |model|
  puts "Deleting #{model.name} data".yellow
  model.delete_all
end

puts 'Deleting all data'.yellow
models = [User, Author, Gink, Review, Book, Shelve, Publisher, Comment, ImageLink, Like, Message, Notification, Raiting]
models.each { |model| delete_data_and_puts_info.call(model) }

5.times do
  user = User.create(Faker::Internet.user)
  puts "User #{user.username.to_s.blue} created".red

  image_link = ImageLink.create(url: Faker::LoremFlickr.image(size: '300x300', search_terms: %w[cat dog]))
  user.image_link = image_link
  puts 'Images links created'.red

  author = Author.create(name: Faker::Book.author)
  puts "Author #{author.name.to_s.blue} created".red

  image_link = ImageLink.create(url: Faker::LoremFlickr.image(size: '300x300', search_terms: %w[cat dog]))
  author.image_link = image_link
  puts 'Images links created'.red

  publisher = Publisher.create(name: Faker::Book.publisher)
  puts "Publisher #{publisher.name.to_s.blue} created".red
end

15.times do
  book = Book.create(title: Faker::Book.title, pages_count: Faker::Number.within(range: 100..3000),
                     isbn: Faker::Number.number(digits: 10).to_s, description: Faker::Lorem.paragraph(sentence_count: 5), publisher: Publisher.all.sample)
  puts "Book #{book.title.to_s.blue} created".red

  image_link = ImageLink.create(url: Faker::LoremFlickr.image(size: '300x300', search_terms: %w[book]))
  book.image_link = image_link
  puts 'Images links created'.red

  shelve = Shelve.create(title: Faker::Quote.singular_siegler, author: User.all.sample)
  shelve.books << Book.all.sample
  puts "Shelve #{shelve.title.to_s.blue} created".red

  Author.all.sample.books << Book.all.sample

  gink = Gink.create(title: Faker::Lorem.paragraph(sentence_count: 1),
                     text: Faker::Lorem.paragraph(sentence_count: 4), author: User.all.sample)
  puts "Gink #{gink.title.to_s.blue} created".red

  review = Review.create(text: Faker::Lorem.paragraphs(number: 2), author: User.all.sample, book: Book.all.sample)
  puts "Review #{review.text.to_s.blue} created".red
end

30.times do
  comment = Comment.create(author: User.all.sample, text: Faker::Lorem.paragraph(sentence_count: 3))
  [Gink, Review, Comment].sample.all.sample.comments << comment
  puts "Comment with id #{comment.id.to_s.blue} created".red

  like = Like.create(user: User.all.sample)
  [Gink, Review, Comment].sample.all.sample.likes << like
  puts "Like with id #{like.id.to_s.blue} created".red
end

30.times do
  sender = User.all.sample
  message = Message.create(author: sender, recipient: (User.all - [sender]).sample,
                           text: Faker::Lorem.paragraph(sentence_count: 1))
  puts "Message with id #{message.id.to_s.blue} created".red

  raiting = Raiting.create(author: User.all.sample, book: Book.all.sample, value: Faker::Number.within(range: 1..5))

  puts "Raiting with #{raiting.id.to_s.blue} created".red

  notification = Notification.create(title: Faker::Lorem.paragraph(sentence_count: 1),
                                     payload: Faker::Lorem.paragraph(sentence_count: 1), user: User.all.sample)
  puts "Notification #{notification.title.to_s.blue} created".red
end

puts "Done in #{Time.now - start_time} seconds".green
