import React from 'react'

function BookCard({ book }) {
    return (
        <a href='/books' class="xs:w-1/3 sm:w-1/4 md:w-1/6 bg-gray-200 shadow-2xl rounded-lg m-2">
            <div className='object-cover'>
                <img src={book.image_url} alt={book.title} className="rounded-tl-2xl rounded-bl-2xl rounded-br-3xl w-full md:w-full h-auto object-fill" />
            </div>
            <p class='text-center text-xl my-2'>{book.title}</p>
            <p class='italic text-center text-md my-2'>{book.authors[0].name}</p>
        </a>
    )
}

export default BookCard
