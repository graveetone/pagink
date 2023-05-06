import React, { useState } from 'react'

const textInputStyles = `
                          md:w-3/4 w-full
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

const buttonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

function ReviewForm({ book, onSubmit }) {
  const [reviewInfo, setReviewInfo] = useState({ bookId: book.id })

  const handleReviewInfoChange = (event) => {
    setReviewInfo(previousReviewInfo => ({
      ...previousReviewInfo,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className='flex flex-col justify-center items-center w-full p-12 gap-6'>
      <textarea className={textInputStyles}
        name='text'
        placeholder={'Type here...'}
        onChange={handleReviewInfoChange}
      />

      <div className='flex items-center justify-center xs:w-2/3 md:w-2/5'>
        <button className={buttonStyles} onClick={() => {onSubmit(reviewInfo)}}>Post review!</button>
      </div >
    </div>
  )
}

export default ReviewForm;
