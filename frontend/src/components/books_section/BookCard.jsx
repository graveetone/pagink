import React from 'react'

function BookCard({ book }) {
    return (
        <a href='/book' className="xs:w-1/3 sm:w-1/4 md:w-1/6 bg-gray-200 shadow-2xl rounded-lg">
            <div className='flex flex-col gap-3'>
                <div className='object-cover'>
                    <img src={book.image_url} alt={book.title} className="rounded-tl-2xl rounded-bl-2xl rounded-br-3xl w-full md:w-full h-auto object-fill" />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 font-roboto'>
                    <p className='text-center text-lg font-comic-neue'>{book.title}</p>
                    <p className='text-center text-sm font-roboto'>{book.authors?.[0].name}</p>
                </div>
            </div>
        </a>
    )
}

export default BookCard;
