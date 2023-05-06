import React from 'react'
import helpers from '../../helpers'
import BooksSection from './../../components/books_section/BooksSection'
import ShelveHeader from './components/ShelveHeader'
import { useShelveQuery } from './../../api/queries/shelves'
import LoadableContent from './../../components/LoadableContent'
import { useParams } from 'react-router-dom'

const Shelve = (shelve) => {
    { helpers.setPageTitle(`${shelve.title} by ${shelve.author.username}`) }

    return (
        <>
            <div className='flex flex-col items-center gap-5'>
                <ShelveHeader shelve={shelve} />
                <BooksSection caption={`Books in this shelve (${shelve.books.length})`} books={shelve.books} />
            </div>
        </>
    )

}
function ShelvePage() {
    const shelveId = parseInt(useParams().shelveId);

    return <LoadableContent hook={useShelveQuery} params={shelveId} >
        {Shelve}
    </LoadableContent>

}

export default ShelvePage;
