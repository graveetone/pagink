import React, { useState } from 'react'

import BookInfo from './components/BookInfo'
import BookCover from './components/BookCover'
import { data } from './data'
import { data as reviews } from './reviews'
import helpers from '../../helpers'
import Header from './../../components/header/Header'
import Button from '../../components/Button'
import icons from '../../components/icons'
import ModalWindow from '../../components/ModalWindow'
import ReviewForm from './../../components/ReviewForm'
import PostCard from '../../components/PostCard'

function BookPage() {
  helpers.setPageTitle(data.title)

  const [formForReviewVisible, setFormForReviewVisible] = useState(false)

  const authorsLinks = helpers.joinAuthorNamesAsLinks(data.authors);
  const authors = helpers.joinAuthorNames(data.authors);

  const AuthorsSection = helpers.captionWithJsx('by', authorsLinks)

  const submitReview = () => {
    // send review here
    closeModal()
  }

  const closeModal = () => {
    setFormForReviewVisible(false)
  }

  const recentPosts = reviews.map(review => {
    return <PostCard key={reviews.id} post={review} />
  })

  return (
    <>
      <div className="flex w-full flex-col items-center gap-5">
        <div className='flex fixed top-0 right-0 w-1/5'>
          <Button
            icon={icons.pencil}
            className={'w-full h-full rounded-none rounded-b-2xl border-ruby-red bg-ruby-red text-white'}
            onClick={() => { setFormForReviewVisible(true) }}
          />
        </div>
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
        <Header heading={<></>} subheading={(
          <>
            <div className='flex flex-col mt-24 gap-12 w-5/6 md:w-1/2'>
              {recentPosts}
            </div>
          </>
        )} />
        <div>
          <ModalWindow
            title={(
              <p className='flex flex-col gap-3'>
                <span>
                  Write review for
                </span>
                <span>
                  {data.title} by {authors}
                </span>
              </p>
            )}
            isOpen={formForReviewVisible}
            onRequestClose={closeModal}
            content={(
              <ReviewForm
                book={data}
                onSubmit={submitReview} />)}
          />
        </div>
      </div>
    </>
  )
}

export default BookPage;
