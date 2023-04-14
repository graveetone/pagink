import React from 'react'

function AuthorCard({ name, image_url }) {
    return (
        <div className='flex flex-row items-center my-3 justify-center'>
            <div className="xs:w-full sm:w-1/2 xs:justify-center sm:justify-center md:w-1/3">
                <div className="flex justify-center items-around xs:w-1/2 sm:w-3/4 b md:w-3/4">
                    <img src={image_url} alt={name} className="rounded-xl" />
                </div>
            </div>
            <p className='text-xl w-2/3 p-3 text-center text-black'>{name}</p>
        </div>
    )
}

export default AuthorCard
