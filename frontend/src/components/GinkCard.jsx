import React from 'react'
import { Link } from 'react-router-dom'

import Image from './../components/Image'
import Button from './Button'
import icons from './icons'
import LikeButton from './LikeButton'

function GinkCard({ gink }) {
    const linkToGink = `/gink/${gink.id}`

    const author = gink.author;
    const linkToAuthor = `/user/${author.id}`
    return (
        <>
            <Link to={linkToGink} className='relative flex p-3 gap-3 flex-col justify-center items-center shadow-2xl shadow-black w-full border-black text-center rounded-xl'>
                <div className='absolute right-0 top-0 border-2 rounded-bl-xl rounded-tr-xl bg-ruby-red p-2 text-sm text-white'>
                    Gink
                </div>
                <div className='flex w-full items-center gap-3'>
                    <div className='flex'>
                        <Link to={linkToAuthor}>
                            <Image src={author.image_url} alt={author.username} width={'w-24'} height={'h-24'} />
                        </Link>
                    </div>
                    <div className='flex flex-col text-2xl w-full flex-1'>
                        <Link to={linkToAuthor} className='flex w-full'>
                            <p className='p-1 break-all'>
                                {author.username}
                            </p>
                        </Link>
                        <div className='flex items-center gap-3 w-full border-l-4 border-ruby-red p-3'>
                            <div className='text-start'>
                                <p className='flex break-words text-lg'>
                                    {gink.title}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center p-3 w-full'>
                    <p className='text-center text-xl break-words font-roboto'>
                        {gink.text}
                    </p>
                </div>
                <div className='flex justify-between items-center w-full font-balsamiq'>
                    <div className='flex justify-center items-center gap-3 text-center text-sm'>
                        <p>
                            {icons.clock}
                        </p>
                        <p>
                            {gink.timestamp}
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <LikeButton isLiked={gink.likedByCurrentUser} caption={gink.likesCount} likeableData={{
                            likeable_id: gink.id,
                            likeable_type: 'Gink'
                        }}
                            queriesToInvalidate={[{
                                predicate: function(query) {
                                  return query.queryKey.includes('bookmatees_posts')
                                },
                              }, ['users', gink.author.id, 'posts']]}
                        />
                        <div className='flex justify-center items-center'>
                            <Button icon={<>{gink.commentsCount} {icons.comments}</>} href={`/gink/${gink.id}`} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default GinkCard;
