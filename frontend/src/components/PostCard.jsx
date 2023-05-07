import React from 'react'

import ReviewCard from './ReviewCard'
import GinkCard from './GinkCard'

function PostCard({ post }) {
  const cardByPostType = {
    gink: <GinkCard gink={post} />,
    review: <ReviewCard review={post} />
  }

  return cardByPostType[post.type]
}

export default PostCard;
