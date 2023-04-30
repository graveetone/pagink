import React from 'react'

function Image({ src, width, height }) {
    return (
        <div className={`flex items-center justify-center m-3 ${width} ${height}`}>
            <img src={src} className={'rounded-full w-full h-full object-cover object-center'} />
        </div>
        
    )
}

export default Image;
