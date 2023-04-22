import React from 'react'

import BookInfo from './components/BookInfo'
import BookCover from './components/BookCover'
import { data } from './data'
import { setPageTitle, CaptionWithJsx, createLinkTo } from '../../helpers'
import Header from './../../components/Header/Header'

function BookPage() {
  setPageTitle(data.title)

  const authors = data.authors.map(author => {
    return createLinkTo('/author', author.name + ' ')
  })

  const AuthorsSection = CaptionWithJsx('by', authors)

  return (
    <>
      <div className="flex w-full flex-col items-center">
        <Header heading={data.title} subheading={AuthorsSection}></Header>
        <div className="flex w-full flex-col items-center md:flex-row justify-around">
          <BookCover alt={data.title} url={data.image_url} />
          <BookInfo data={data} />
        </div>
        <div className="flex flex-col items-center w-full sm:w-6/7 md:w-3/4 p-4 mt-6 text-center text-gray-700">
          <p className="text-xl md:text-2xl break-words">{data.description}</p>
        </div>
      </div>
    </>
  )
}

export default BookPage;
