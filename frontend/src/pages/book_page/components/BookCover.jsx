import React from 'react'

function BookCover({ alt, url }) {
    return (
        <>
            <div className="flex items-center justify-center xs:w-3/4 sm:w-3/4 md:w-1/4">
                <img src={url} alt={alt} className="rounded-3xl object-cover object-center" />
            </div>
        </>
    )
}

export default BookCover;
