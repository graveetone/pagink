import React from 'react'
import BookCard from './BookCard'

function BooksSection({caption, books}) {
    return (
        <>
            <div className='flex justify-center w-full'>
                <p className='w-full xs:text-2xl md:text-3xl text-center break-normal font-balsamiq'>{caption}</p>
            </div>
            <div className="flex xs:w-full md:w-5/6 flex-wrap justify-evenly gap-3">
                {books.map(book => (
                    <BookCard book={book} key={book.id} /> 
                ))}      
            </div>
        </>
    )
}

export default BooksSection;
