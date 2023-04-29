class BookSearchHelper
  class << self
    def string_with_numbers_only?(string)
      /\A\d+\z/.match?(string)
    end
  end
end
