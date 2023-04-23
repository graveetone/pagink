import React from 'react'
import BookCard from './BookCard'

function BooksSection({caption, books}) {
    return (
        <>
            <div className='flex justify-center w-full'>
                <p className='w-full xs:text-2xl md:text-4xl text-center break-normal font-roboto'>{caption}</p>
            </div>
            <div className="flex xs:w-full md:w-3/4 flex-wrap justify-around gap-4">
                {books.map(book => (
                    <BookCard book={book} key={book.id} /> 
                ))}      
            </div>
        </>
    )
}

export default BooksSection;
