import React from 'react'

function BookCover({ alt, url }) {
    return (
        <>
            <div className="xs:w-3/4 sm:w-1/2 xs:justify-center sm:justify-center md:w-1/5">
                <img src={url} alt={alt} className="max-w-1/2 h-auto block mx-auto rounded-3xl" />
            </div>



        </>
    )
}

export default BookCover

