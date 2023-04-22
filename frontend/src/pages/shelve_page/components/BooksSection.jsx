import React from 'react'
import BookCard from './BookCard'

function BooksSection({books}) {
    return (
        <>
            <div className='flex justify-center mt-10 w-full'>
                <p className='w-full xs:text-2xl md:text-4xl text-center break-normal'>Books in this shelve ({books.length})</p>
            </div>
            <div className="flex xs:w-full md:w-3/4 flex-wrap justify-around my-6">
                {books.map(book => (
                    <BookCard book={book} key={book.id} /> 
                ))}      
            </div>
        </>
    )
}

export default BooksSection
