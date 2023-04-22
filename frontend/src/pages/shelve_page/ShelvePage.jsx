import React from 'react'
import { data } from './data'
import { setPageTitle } from '../../helpers'
import BooksSection from './components/BooksSection'
import ShelveHeader from './components/ShelveHeader'

function ShelvePage() {
    setPageTitle(`${data.title} by ${data.author.username}`)

    return (
        <>
            <div className='flex flex-col items-center gap-5'>
                <ShelveHeader shelve={data}/>
                <BooksSection books={data.books} />
            </div>
        </>
    )
}

export default ShelvePage;
