import React from 'react'
import AuthorCard from './AuthorCard'

function AuthorsSection({ authors }) {
  return (
    <>
      <div className='flex flex-col justify-center items-around b xs:w-3/4 sm:w-full md:w-1/2 mt-3'>
        <p className='text-center text-gray-600 text-4xl'>Authors:</p>
        <div className='flex flex-col items-center justify-center p-3 w-full'>
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
