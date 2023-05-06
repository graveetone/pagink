import React from 'react'

function Image({ src, alt, width, height }) {
    return (
        <div className={`flex items-center justify-center w-full h-full`}>
            <img src={src} alt={alt} className={`rounded-full ${width} ${height} object-cover object-center`} />
        </div>
    )
}

export default Image;
