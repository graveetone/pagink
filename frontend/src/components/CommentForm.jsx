import React, { useState, useContext } from 'react'
import icons from './icons'
import Image from './Image'
import { CurrentUserContext } from './../contexts/CurrentUserContext'

const textInputStyles = `md:w-full w-full
                         h-[20vh]
                         text-center
                         border-2 border-black
                         rounded-3xl
                         p-5
                         font-balsamiq
                         shadow-2xl shadow-gray-600
                         focus:outline-none focus:shadow-black
                         resize-none
                         `

const editProfileButtonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

function CommentForm({ commentData, onSubmit }) {
  const [commentInfo, setCommentInfo] = useState({
    text: '',
    origin_id: commentData.origin?.id,
    commentable_id: commentData.commentable_id,
    commentable_type: commentData.commentable_type
  })

  const { currentUser } = useContext(CurrentUserContext)
  return (
    <div className='flex flex-col justify-center items-center w-full px-3 gap-6'>
      {commentData.origin &&
        <div className='flex p-3 gap-3 flex-cols justify-center items-center shadow-2xl shadow-black w-full border-black text-center rounded-xl'>
          <div>
            <Image src={commentData.origin.author.image_url} alt={commentData.origin.author.username} width={'w-16'} height={'h-16'} />
          </div>
          <div className='flex flex-col flex-1'>
            <p className='flex flex-col font-balsamiq text-lg flex-1'>
              {commentData.origin.author.username}
            </p>
            <p className='text-start text-xl font-roboto break-all'>
              {commentData.origin.text}
            </p>
            <p className='flex justify-end items-center gap-3 text-center text-sm'>
              {icons.clock}
              {commentData.origin.timestamp}
            </p>
          </div>
        </div>
      }

      <div className='flex p-3 gap-3 flex-cols justify-center items-center shadow-2xl shadow-black w-full border-black text-center rounded-xl'>
        <div>
          <Image src={currentUser.image_url} alt={currentUser.username} width={'w-16'} height={'h-16'} />
        </div>
        <div className='flex flex-col flex-1'>
          <p className='flex flex-col font-balsamiq text-lg'>
            {currentUser.username}
          </p>
          <p className='text-start text-xl font-roboto'>
            <textarea className={textInputStyles}
              name='commentText'
              placeholder={'Type here...'}
              value={commentInfo.text}
              onChange={(e) => setCommentInfo(previousCommentInfo => ({
                ...previousCommentInfo,
                text: e.target.value
              }))} />
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center xs:w-2/3 md:w-2/5 m-3'>
        <button className={editProfileButtonStyles} onClick={() => onSubmit(commentInfo)}>Comment!</button>
      </div >
    </div>
  )
}

export default CommentForm;
