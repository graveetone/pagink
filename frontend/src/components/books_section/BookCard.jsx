import React from 'react'
import { Link } from 'react-router-dom';

import BookImage from '../BookImage';
function BookCard({ book }) {
    return (
        <Link to={`/book/${book.id}`} className="xs:w-5/6 sm:w-1/4 md:w-1/4 shadow-2xl bg-white shadow-black rounded-3xl">
            <div className='flex flex-col w-full justify-center items-center p-2'>
                <BookImage src={book.image_url} width={'w-full'} height={'h-full'} />
                <div className='flex flex-col justify-center items-center gap-2 font-balsamiq p-3'>
                    <p className='text-center text-xl'>{book.title}</p>
                    <p className='text-center text-lg'>{book.authors?.[0]?.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default BookCard;
