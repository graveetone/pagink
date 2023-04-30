import React from 'react'

import BookInfo from './components/BookInfo'
import BookCover from './components/BookCover'
import { data } from './data'
import helpers from '../../helpers'
import Header from './../../components/header/Header'

function BookPage() {
  helpers.setPageTitle(data.title)


  const authors = helpers.joinAuthorNamesAsLinks(data.authors);

  const AuthorsSection = helpers.captionWithJsx('by', authors)

  return (
    <>
      <div className="flex w-full flex-col items-center gap-5">
        <Header heading={data.title} subheading={AuthorsSection}></Header>
        <div className="flex w-full flex-col items-center md:flex-row justify-around gap-10">
          <BookCover alt={data.title} url={data.image_url} />
          <BookInfo data={data} />
        </div>
        <div className='w-5/6 font-roboto xs:text-2xl sm:text-3xl text-gray-900 text-center leading-relaxed tracking-wider'>
          <p>
            {data.description}
          </p>
        </div>
        <div className="flex flex-col items-center p-6">
          <p className="w-full font-roboto xs:text-xl sm:text-2xl text-gray-800 text-center leading-free tracking-wider"></p>
        </div>
      </div>
    </>
  )
}

export default BookPage;
