class Api::V1::UsersController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_user, only: %i[show bookmates_posts shelves bookmates posts]

  def index
    @users = User.all

    render json: @users
  end

  def show
    render json: @user
  end

  def bookmates_posts
    bookmate_ids = [*@user.bookmates.pluck(:id), @user.id]

    reviews = Review.where(author_id: bookmate_ids)
    ginks = Gink.where(author_id: bookmate_ids)

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

  def bookmates
    bookmates = @user.bookmates

    render json: {
      bookmates: serialize_collection(bookmates, UserAuthorSerializer)
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

  private

  def set_user
    @user = User.find(params[:id])
  end
end
