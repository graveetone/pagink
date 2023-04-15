import React from 'react'

import BookInfo from './components/BookInfo'
import BookCover from './components/BookCover'
import AuthorsSection from './components/AuthorsSection'
import { data } from './data'
import { setPageTitle } from '../../helpers'


function Book() {
  setPageTitle(data.title)
  return (
    <>
      <div className="flex w-full flex-col items-center">
        <div className='flex justify-end md:w-2/6 text-center'>
          <h1 className='xs:text-3xl sm:text-5xl font-extrabold mt-4'>
            <i>{data.title}</i>
          </h1>
        </div>
        <div className="flex w-full flex-col items-center md:flex-row justify-around mx-5">
          <BookCover alt={data.title} url={data.image_url} />
          <div className='flex flex-col xs:w-full sm:w-full md:w-2/3'>
            <div className='flex xs:flex-col md:flex-row justify-around items-center'>
              <BookInfo data={data} />
              <AuthorsSection authors={data.authors} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full sm:w-6/7 md:w-3/4 p-4 mt-6 text-center italic font-black text-gray-700">
          <p className="text-xl md:text-2xl break-words">{data.description}</p>
        </div>
      </div >
    </>
  )
}

export default Book;
