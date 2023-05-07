class UserSerializer < BaseSerializer
  attributes %i[id username status image_url sign_in_count last_sign_in_at bookmatesCount ginksCount
                reviewsCount membershipDuration isCurrentUser isFollowedByCurrentUser]

  def image_url
    object.image_link&.url
  end

  def status
    if object.active?
      object.updated_at && Time.now - 5.minutes <= object.updated_at ? 'ONLINE' : "Last seen #{time_ago_in_words(object.updated_at)} ago"
    else
      object.status
    end
  end

  def bookmatesCount
    object.bookmates.count
  end

  def ginksCount
    object.ginks.count
  end

  def reviewsCount
    object.reviews.count
  end

  def membershipDuration
    months_names = %w[January February March April May June July August September October
                      November December]

    month_name = months_names[object.created_at.month - 1]
    "#{month_name} #{object.created_at.year}"
  end

  def isCurrentUser
    object == scope if scope.present?
  end

  def isFollowedByCurrentUser
    object.bookmates.include?(scope) if scope.present?
  end
end
