import React from 'react'

function BookImage({ src, alt, width, height }) {
    return (
        <div className={`flex items-center justify-center m-3 ${width} ${height}`}>
            <img src={src} alt={alt} className={'rounded-3xl w-full h-full object-cover object-center'} />
        </div>
        
    )
}

export default BookImage;
