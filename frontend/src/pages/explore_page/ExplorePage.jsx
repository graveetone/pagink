import React from 'react'
import { setPageTitle } from '../../helpers'
import Header from '../../components/header/Header'
import SearchSection from './components/SearchSection'
import BooksSection from '../../components/books_section/BooksSection';
import { data } from './data';
import GlobalSearchButton from './components/GlobalSearchButton';

function ExplorePage() {
    setPageTitle('Explore')

    return (
        <>
            <div className='flex flex-col gap-10'>
                <Header heading='Explore' subheading={"Find new books"} />

                <div className="flex flex-wrap justify-center w-full items-center gap-10">
                    <SearchSection />
                    <BooksSection caption={`We found (4) books`} books={data.books} />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <GlobalSearchButton onClick={() => { alert('Global Search Triggered') }} />
                </div>
            </div>
        </>
    )
}

export default ExplorePage;
