import React from 'react'
import { useParams } from 'react-router-dom'

import { useBookQuery, useReviewsQuery } from './../../api/queries/books'

import Book from './components/Book'
import BookReviews from './components/BookReviews'
import LoadableContent from '../../components/LoadableContent'

function BookPage() {
  const bookId = parseInt(useParams().bookId);

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <LoadableContent hook={useBookQuery} params={bookId}>
        {Book}
      </LoadableContent>

      <LoadableContent hook={useReviewsQuery} params={bookId} subLoader={true}>
        {BookReviews}
      </LoadableContent>
    </div>
  )
}

export default BookPage;
