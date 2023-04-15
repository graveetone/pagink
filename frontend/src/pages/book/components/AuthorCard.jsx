import React from 'react'

function AuthorCard({ name, image_url }) {
    return (
        <a href='/authors' className='flex flex-row items-center justify-center rounded-3xl border-2 border-gray-400 bg-gray-300 my-2 p-3'>
            <div className="xs:w-full sm:w-1/2 xs:justify-center sm:justify-center md:w-1/3">
                <div className="flex justify-center items-around xs:w-1/2 sm:w-3/4 md:w-3/4">
                    <img src={image_url} alt={name} className="rounded-xl" />
                </div>
            </div>
            <p className='text-xl w-2/3 p-3 text-center text-black italic'>{name}</p>
        </a>
    )
}

export default AuthorCard
