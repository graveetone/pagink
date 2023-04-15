import React from 'react'

function AuthorImage({ alt, image_url }) {
    return (
        <>
            <div className="flex w-1/5 items-center justify-center">
                <img src={image_url} alt={alt} className="max-w-1/2 h-auto block mx-auto rounded-3xl" />
            </div>
        </>
    )
}

export default AuthorImage
