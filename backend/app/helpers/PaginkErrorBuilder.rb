PAGINK_ERRORS = {
  wrong_book_source_type: {
    status: 400,
    message: 'Unknown book source type'
  },
  cannot_get_info_from_gb_api: {
    status: 500,
    message: 'Third-party Google Books Service unavailable'
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
