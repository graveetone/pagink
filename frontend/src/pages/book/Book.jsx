import React from 'react'

import BookInfo from './components/BookInfo'
import BookCover from './components/BookCover'
import AuthorsSection from './components/AuthorsSection'
import { data } from './data'


function Book() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-between">

        <h1 className='xs:text-3xl sm:text-5xl font-extrabold text-center mt-4'>
          <span>
            <i>{data.title}</i>
          </span>

        </h1>
        <div className="flex w-full flex-col items-center md:flex-row justify-around mx-5 ">
          <BookCover alt={data.title} url={data.image_url} />
          <div className='flex flex-col b xs:w-full sm:w-full md:w-2/3'>

            <div className='flex xs:flex-col md:flex-row justify-around items-center mb-10'>
              <BookInfo data={data} />
              <AuthorsSection authors={data.authors} />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center xs:w-6/7 md:w-3/4 p-4 text-center italic font-black text-gray-700'>
          <h2 className='xs:text-xl md:text-2xl'>{data.description}</h2>
        </div>
      </div >
    </>
  )
}

export default Book;