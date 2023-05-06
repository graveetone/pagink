import React, { useState } from 'react'
import Input from '../../../components/Input'

function SearchSection(onChange) {
    const [query, setQuery] = useState('')

    const handleSearch = e => {
        setQuery(e.target.value)
    }
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <Input name='search' type='text' onChange={handleSearch} placeholder='type something..' value={query} />
        </div>
    )
}

export default SearchSection;
