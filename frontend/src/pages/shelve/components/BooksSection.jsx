import React from 'react'
import BookCard from './BookCard'

function BooksSection({books}) {
    return (
        <>
            <div className='flex justify-center mt-10 w-full'>
                <p className='w-full xs:text-2xl md:text-4xl text-center break-normal mx-'>Books in this shelve ({books.length})</p>
            </div>
            <div class="flex w-3/4 flex-wrap justify-between my-3">
                {books.map(book => (
                    <BookCard book={book} key={book.id} /> 
                ))}      
            </div>
        </>
    )
}

export default BooksSection
