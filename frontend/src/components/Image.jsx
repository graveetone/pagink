import React from 'react'

function Image({ src, alt, width, height }) {
    return (
        <div className={`flex items-center justify-center m-3 ${width} ${height}`}>
            <img src={src} alt={alt} className={'rounded-full w-full h-full object-cover object-center'} />
        </div>
        
    )
}

export default Image;
