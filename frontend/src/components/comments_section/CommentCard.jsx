import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import icons from '../icons'
import Image from '../Image'
import helpers from './../../helpers'
import CreateReplySection from './CreateReplySection'
import LikeButton from '../LikeButton'

function CommentCard({ comment, parent, commentsRef }) {
    const commentRef = useRef();
    commentsRef.current[comment.id] = commentRef;
    const author = comment.author;
    const linkToAuthor = `/user/${author.id}`

    const origin = comment.origin;
    const originRef = origin && commentsRef.current[origin.id];

    const scrollToOrigin = () => {
        originRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <>
            <div ref={commentRef} className='flex p-3 gap-3 flex-col justify-center items-center shadow-2xl shadow-black w-full border-black text-center rounded-xl'>
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
                        {origin && <div className='flex flex-col items-start gap-3 w-full border-l-4 border-ruby-red p-3 cursor-pointer' onClick={() => scrollToOrigin()}>
                            <div>
                                {icons.replyArrow}
                            </div>
                            <div className='flex text-start'>
                                <div className='flex'>
                                    <Link to={linkToAuthor}>
                                        <Image src={origin.author.image_url} alt={origin.author.username} width={'w-16'} height={'h-16'} />
                                    </Link>
                                </div>
                                <div className='flex flex-1 w-full flex-col gap-2 px-2'>
                                    <p className='flex text-lg'>
                                        {origin.author.username}
                                    </p>
                                    <p className='text-sm'>
                                        {helpers.getTextPreview(origin.text)}
                                    </p>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className='flex justify-center items-center p-3 w-full'>
                    <p className='text-center text-xl font-roboto'>
                        {comment.text}
                    </p>
                </div>
                <div className='flex justify-between items-center w-full font-balsamiq'>
                    <div className='flex justify-center items-center gap-3 text-center text-sm'>
                        <p>
                            {icons.clock}
                        </p>
                        <p>
                            {comment.timestamp}
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <LikeButton isLiked={comment.likedByCurrentUser} caption={comment.likesCount} likeableData={{
                            likeable_id: comment.id,
                            likeable_type: 'Comment'
                        }}
                            queriesToInvalidate={[['reviews'], ['ginks']]}
                        />
                        <CreateReplySection origin={comment} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard;
