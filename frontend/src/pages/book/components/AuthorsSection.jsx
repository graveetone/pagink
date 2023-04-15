import React from 'react'
import AuthorCard from './AuthorCard'

function AuthorsSection({ authors }) {
  return (
    <>
      <div className='flex flex-col justify-center items-around xs:w-3/4 sm:w-full md:w-1/2'>
        <p className='text-center text-gray-600 text-4xl my-4 p-1'>Authors</p>
        <div className='flex flex-col items-center justify-center w-full'>
          {authors.map(author => {
            return (
              <AuthorCard key={`author-${author.id}`}
                name={author.name}
                image_url={author.image_url}
                className='' />
            )
          }
          )
          }
        </div>
      </div>
    </>
  )
}

export default AuthorsSection
