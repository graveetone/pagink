import React from 'react'

function BookCard({ book }) {
    return (
        <a href='/book' className="xs:w-1/2 sm:w-1/4 md:w-1/6 bg-gray-200 shadow-2xl rounded-lg">
            <div className='px-3'>
                <div className='object-cover'>
                    <img src={book.image_url} alt={book.title} className="rounded-tl-2xl rounded-bl-2xl rounded-br-3xl w-full md:w-full h-auto object-fill" />
                </div>
                <p className='text-center text-lg my-2'>{book.title}</p>
                <p className='italic text-center text-sm my-2'>{book.authors[0].name}</p>
            </div>
        </a>
    )
}

export default BookCard
