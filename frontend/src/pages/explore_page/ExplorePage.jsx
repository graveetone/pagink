import React, { useState } from 'react'

import helpers from '../../helpers'
import BooksSection from '../../components/books_section/BooksSection';
import GlobalSearchButton from './components/GlobalSearchButton';
import LoadableContent from '../../components/LoadableContent'
import { useSearchQuery, useGlobalSearchQuery } from './../../api/queries/books'
import Input from '../../components/Input'
import Heading from '../../components/Heading';
import Subheading from '../../components/Subheading';

const FoundBooks = (books) => {
    return (
        <>
            <BooksSection caption={`We found ${books.length} books `} books={books} />
        </>
    )
}

function ExplorePage() {
    const [queryHook, setQueryHook] = useState({ hook: useSearchQuery })
    const [searchActive, setSearchActive] = useState(false)
    const [query, setQuery] = useState('')

    const handleSearch = event => {
        setQuery(event.target.value)
        setSearchActive(!!event.target.value)
    }

    helpers.setPageTitle('Explore')

    return (
        <>
            <div className='flex flex-col gap-10'>
                <Heading>Explore</Heading>
                <Subheading>
                    Find new books
                </Subheading>

                <div className="flex flex-wrap justify-center w-full items-center gap-10">
                    <div className='flex flex-col justify-center items-center w-full'>
                        <Input name='search' type='text' onChange={handleSearch} placeholder='type something..' value={query} />
                    </div>

                    {searchActive && <LoadableContent hook={queryHook.hook} params={query}>
                        {FoundBooks}
                    </LoadableContent>}
                </div>

                <div className='flex justify-center items-center w-full'>
                    <GlobalSearchButton onClick={() => { setQueryHook({ hook: useGlobalSearchQuery }) }} />
                </div>
            </div>
        </>
    )
}

export default ExplorePage;
