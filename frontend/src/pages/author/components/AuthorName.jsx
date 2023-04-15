import React from 'react'

function AuthorName({ name }) {
    return (
        <div className='flex justify-center items-center'>
            <p className='xs:text-2xl sm:text-4xl md:text-4xl'>
                {name}
            </p>
        </div>
    )
}

export default AuthorName
