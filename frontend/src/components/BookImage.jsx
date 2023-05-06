import React from 'react'

function BookImage({ src, alt, width, height }) {
    return (
        <div className={`flex items-center justify-center w-full h-full`}>
            <img src={src} alt={alt} className={`rounded-3xl ${width} ${height} object-cover object-center`} />
        </div>
    )
}

export default BookImage;
