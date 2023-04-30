import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Image from './../components/Image'
import BookImage from './../components/BookImage'
import Button from './Button'
import icons from './icons'
import helpers from '../helpers'

function PostCard({ post }) {
  const [liked, setLiked] = useState(post.likedByCurrentUser)
  const linkToPost = (post.type === 'gink' ? '/gink' : '/review')
  return (
    <>
      <Link to={linkToPost} className='shadow-2xl p-1 shadow-black flex w-full justify-center items-center border-black text-center rounded-xl'>
        <div className='flex flex-col w-full items-center'>
          <div className='flex w-full justify-start'>
            <div>
              <div className='flex flex-col p-2 font-balsamiq'>
                <p className='text-xl'>{post.author.username}</p>
                <Link to='/user' className='flex'>
                  <Image src={post.author.image_url} alt={post.author.username} width={'w-24'} height={'h-24'} />
                </Link>
                <p className='text-sm'>{post.created_at}</p>
              </div>

              {post.book &&
                <div className='flex justify-center border-t-2 border-black items-center flex-col font-balsamiq'>
                  <Link to='/book' className='flex'>
                    <BookImage src={post.book.image_url} alt={post.book.title} width={'w-24'} height={'h-36'} />
                  </Link>
                  <p className='text-xl'>{post.book.title}</p>
                </div>
              }
            </div>
            <div className='flex flex-col items-center justify-between w-full gap-3 font-balsamiq p-2 border-l-2 border-black'>
              <div className='flex flex-col justify-center items-center'>
                {post.title && <p>{post.title}</p>}
                <div className='flex w-full text-xl p-3 justify-center items-center text-center font-sans'>
                  <p>
                    {helpers.getTextPreview(post.text)}
                  </p>
                </div>
              </div>
              <div className='flex self-end justify-end items-end gap-6'>
                <div className='flex justify-center items-center'>
                  <Button icon={<>{post.likesCount}{liked ? icons.liked : icons.unliked}</>} onClick={() => { setLiked(!liked) }} />
                </div>
                <div className='flex justify-center items-center'>
                  <Button icon={<>{post.commentsCount} {icons.comments}</>} onClick={() => { }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PostCard;
