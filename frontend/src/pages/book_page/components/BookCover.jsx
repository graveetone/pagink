import React from 'react'
import BookImage from '../../../components/BookImage';

function BookCover({ alt, url }) {
    return (
        <>
            <div className='w-full'>
                <BookImage src={url} width={'w-72'} height={'h-96'} />
            </div>
        </>
    )
}

export default BookCover;
