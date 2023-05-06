import React from 'react'
import BookInfo from './BookInfo'
import BookCover from './BookCover'
import helpers from '../../../helpers'
import Heading from '../../../components/Heading'
import Subheading from './../../../components/Subheading'
import CreateReviewSection from './CreateReviewSection'

const Book = (book) => {
    helpers.setPageTitle(book.title)

    const authorsLinks = helpers.joinAuthorNamesAsLinks(book.authors);
    const AuthorsSection = <div className='flex flex-col w-5/6'>{helpers.captionWithJsx('by', authorsLinks)}</div>

    return <>
        <div className='flex flex-col w-full gap-3'>
            <Heading>
                {book.title}
            </Heading>
            <Subheading>
                {AuthorsSection}
            </Subheading>
        </div>
        <div className="flex w-full flex-col items-center md:flex-row justify-around gap-10">
            <BookCover alt={book.title} url={book.image_url} />
            <BookInfo book={book} />
        </div>
        <div className='w-5/6 font-roboto xs:text-2xl sm:text-3xl text-gray-900 text-center leading-relaxed tracking-wider'>
            <div dangerouslySetInnerHTML={{ __html: book.description }} />
        </div>

        <CreateReviewSection
            book={book}
        />
    </>
}

export default Book;
