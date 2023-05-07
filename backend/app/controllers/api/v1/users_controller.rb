class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: %i[show bookmatees_posts shelves bookmates posts follow unfollow]

  def index
    @users = User.all

    render json: @users
  end

  def show
    render json: UserSerializer.new(@user, scope: current_user).as_json
  end

  def bookmatees_posts
    bookmatee_ids = [*@user.bookmatees.pluck(:id), @user.id]

    reviews = Review.where(author_id: bookmatee_ids)
    ginks = Gink.where(author_id: bookmatee_ids)

    posts = (reviews + ginks).sort_by(&:created_at).reverse

    render json: {
      posts: serialize_collection(posts, PostSerializer),
      count: posts.count
    }
  end

  def shelves
    shelves = @user.shelves

    render json: {
      shelves: serialize_collection(shelves, ShelveSerializer),
      author: UserAuthorSerializer.new(@user)
    }
  end

  def bookmatees
    bookmates = @user.bookmatees

    render json: {
      bookmatees: serialize_collection(bookmatees, UserAuthorSerializer)
    }
  end

  def posts
    reviews = Review.where(author: @user)
    ginks = Gink.where(author: @user)

    posts = (reviews + ginks).sort_by(&:created_at).reverse

    render json: {
      posts: serialize_collection(posts, PostSerializer),
      count: posts.count
    }
  end

  def follow
    if @user.bookmates.include?(current_user)
      return render json: {
        error: 'You are already following this user',
        status: 400
      }
    end

    @user.bookmates << current_user

    render json: {}, status: 200
  end

  def unfollow
    unless @user.bookmates.include?(current_user)
      return render json: {
        error: 'You are not following this user',
        status: 400
      }
    end

    @user.bookmates.delete(current_user) if @user

    render json: {}, status: 200
  end

  private

  def set_user
    @user = User.find(params[:id])
  end
end
