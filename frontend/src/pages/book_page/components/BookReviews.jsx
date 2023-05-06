import React from 'react'
import PostCard from '../../../components/PostCard'

const BookReviews = (reviews) => {
    return (
        <div className='flex flex-col mt-24 gap-12 w-5/6 md:w-1/2'>
            {reviews.map(review => {
                return <PostCard key={review.id} post={review} />
            })}
        </div>
    )
}

export default BookReviews;
