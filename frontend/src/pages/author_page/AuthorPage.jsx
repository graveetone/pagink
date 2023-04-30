import React from 'react'

import Header from '../../components/header/Header'
import { data } from './data'
import BooksSection from './../../components/books_section/BooksSection'
import helpers from '../../helpers'

function AuthorPage() {
  helpers.setPageTitle(data.name)

  return (
    <>
      <div className='flex flex-col w-full items-center gap-5'>
        <div className='flex flex-row w-full items-center justify-around h-full'>
          <div className="flex items-center justify-center m-3">
            <img src={data.image_url} alt={data.dataname} className="rounded-3xl xs:w-[35vh] xs:h-auto sm:w-[40vh] sm:auto md:w-[50vh] md:auto lg:w-[55vh] lg:h-auto object-cover object-center" />
          </div>
          <Header heading={data.name} />
        </div>
        <BooksSection caption={`Books by this author (${data.books.length})`} books={data.books} />
      </div>
    </>
  )
}

export default AuthorPage;
