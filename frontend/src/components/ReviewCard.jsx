import React from 'react'
import { Link } from 'react-router-dom'

import Image from './../components/Image'
import Button from './Button'
import icons from './icons'

function ReviewCard({ review }) {
    const linkToReview = `/review/${review.id}`

    const author = review.author;
    const linkToAuthor = `/user/${author.id}`

    const book = review.book;
    const linkToBook = `/book/${book.id}`
    return (
        <>
            <Link to={linkToReview} className='relative flex p-3 gap-3 flex-col justify-center items-center shadow-2xl shadow-black w-full border-black text-center rounded-xl'>
                <div className='absolute right-0 top-0 border-2 rounded-bl-xl rounded-tr-xl bg-ruby-red p-2 text-sm text-white'>
                    Review
                </div>
                <div className='flex w-full gap-3'>
                    <div className='flex'>
                        <Link to={linkToAuthor}>
                            <Image src={author.image_url} alt={author.username} width={'w-24'} height={'h-24'} />
                        </Link>
                    </div>
                    <div className='flex flex-col text-2xl flex-1'>
                        <Link to={linkToAuthor} className='flex w-full p-1'>
                            {author.username}
                        </Link>
                        <Link to={linkToBook} className='flex flex-col items-start gap-3 w-full border-l-4 border-ruby-red p-3'>
                            <div>
                                {icons.bookOpen}
                            </div>
                            <div className='text-start'>
                                <p className='flex text-lg'>
                                    {book.title}
                                </p>
                                {book.authors[0] &&
                                    <p className='flex text-sm'>
                                        by {book.authors[0]?.name}
                                    </p>}
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center p-3 w-full'>
                    <p className='text-center text-xl font-roboto'>
                        {review.text}
                    </p>
                </div>
                <div className='flex justify-between items-center w-full font-balsamiq'>
                    <div className='flex justify-center items-center gap-3 text-center text-sm'>
                        <p>
                            {icons.clock}
                        </p>
                        <p>
                            {review.timestamp}
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex justify-center items-center'>
                            <Button icon={<>{review.likedBy.length}{true ? icons.liked : icons.unliked}</>} onClick={() => { }} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <Button icon={<>{review.commentsCount} {icons.comments}</>} onClick={() => { }} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ReviewCard;
