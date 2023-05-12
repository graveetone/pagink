import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useBookQuery, useCreateFoundBookMutation, useReviewsQuery } from './../../api/queries/books'

import Book from './components/Book'
import BookReviews from './components/BookReviews'
import LoadableContent from '../../components/LoadableContent'

function BookPage() {
  const navigate = useNavigate()
  const bookId = useParams().bookId;
  const parsedBookId = parseInt(bookId);

  const isPaginkId = bookId.split('').every(num => Number.isInteger(parseInt(num)));
  const { mutateAsync: createBook } = useCreateFoundBookMutation({onSuccess: ({data}) => {
    navigate(`/book/${data.id}`)
  },
  enabled: !isPaginkId});

  useEffect(() => {
    if (!isPaginkId) {
      createBook({
        book: {
          source: {
            type: "GB_API",
            id: bookId
          }
        }
      })
    }
  }, [bookId])

  return isPaginkId && (
    <div className="flex w-full flex-col items-center gap-5">
      <LoadableContent hook={useBookQuery} params={parsedBookId}>
        {Book}
      </LoadableContent>

      <LoadableContent hook={useReviewsQuery} params={parsedBookId} subLoader={true}>
        {BookReviews}
      </LoadableContent>
    </div>
  )
}

export default BookPage;
