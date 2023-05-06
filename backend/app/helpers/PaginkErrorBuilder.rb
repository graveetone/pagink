PAGINK_ERRORS = {
  wrong_book_source_type: {
    status: 400,
    message: 'Unknown book source type'
  },
  cannot_get_info_from_gb_api: {
    status: 500,
    message: 'Third-party Google Books Service unavailable'
  },
  username_taken: {
    status: 400,
    message: 'Username already taken'
  },
  email_taken: {
    status: 400,
    message: 'Email already taken. Try to login'
  },
  empty_email: {
    status: 400,
    message: 'Email cannot be empty'
  },
  empty_username: {
    status: 400,
    message: 'Username cannot be empty'
  },
  default: {
    status: 500,
    message: 'Something went wrong'
  }
}
class PaginkErrorBuilder
  attr_accessor :error

  def initialize(error_name)
    @error = error_by_name(error_name) || PAGINK_ERRORS[:default]
  end

  def render
    {
      error: {
        status: error[:status],
        message: error[:message]
      }
    }
  end

  private

  def error_by_name(name)
    PAGINK_ERRORS[name]
  end
end
