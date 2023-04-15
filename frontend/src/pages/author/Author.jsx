import React from 'react'

import AuthorImage from './components/AuthorImage'
import AuthorName from './components/AuthorName'

import { data } from './data'
import BooksSection from './components/BooksSection'
import { setPageTitle } from '../../helpers'

function Author() {
  setPageTitle(data.name)

  return (
    <div className='flex flex-col justify-around items-around w-full'>
      <div className='flex justify-around items-center w-full my-5'>
        <AuthorImage image_url={data.image_url} />
        <AuthorName name={data.name} />
      </div>
      <BooksSection books={data.books} />
    </div>
  )
}

export default Author
