import React from 'react'
import { Link } from 'react-router-dom';

function BookCard({ book }) {
    return (
        <Link to='/book' className="xs:w-5/12 sm:w-1/4 md:w-1/5 shadow-2xl bg-white shadow-black rounded-3xl">
            <div className='flex flex-col w-full justify-center items-center'>
                <div className={'flex items-center justify-center w-5/6 m-5'}>
                    <img src={book.image_url} alt={book.title} className={`rounded-tl-2xl rounded-bl-2xl rounded-br-3xl xs:w-[40vh] xs:h-auto sm:w-[40vh] sm:auto md:w-[50vh] md:auto lg:w-[55vh] lg:h-auto object-cover object-center`} />
                </div>
                <div className='flex flex-col justify-center items-center gap-2 font-balsamiq p-3'>
                    <p className='text-center text-xl'>{book.title}</p>
                    <p className='text-center text-lg'>{book.authors?.[0].name}</p>
                </div>
            </div>
        </Link>
    )
}

export default BookCard;
