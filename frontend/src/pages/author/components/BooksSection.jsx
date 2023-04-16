import React from 'react'
import BookCard from './BookCard'


function BooksSection({ books }) {
    return (
        <div className='flex flex-col items-center m-3'>
            {books.map(book => {
                return (
                    <BookCard book={book} />
                )
            })}
        </div>
    )
}

export default BooksSection