import React from 'react'
import helpers from './../helpers'

const textInputStyles = `md:w-3/4 w-full
                         h-[30vh]
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

function CommentForm({ parent, onSubmit }) {
  return (
    <div className='flex flex-col justify-center items-center w-full p-12 gap-6'>
      <div>
        {parent &&
          <div className='flex flex-col items-center p-2 font-balsamiq justify-center text-xl w-full gap-5'>
            <p>
              Reply to {parent.author.username}
            </p>
            <p>
              {helpers.getTextPreview(parent.text)}
            </p>
            <p>
              written {parent.timestamp}
            </p>
          </div>
        }
      </div>
      <textarea className={textInputStyles}
        name='commentText'
        placeholder={'Type here...'} />

      <div className='flex items-center justify-center xs:w-2/3 md:w-2/5'>
        <button className={editProfileButtonStyles} onClick={onSubmit}>Comment!</button>
      </div >
    </div>
  )
}

export default CommentForm;
