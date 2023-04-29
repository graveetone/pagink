import React, { useState } from 'react'
import Input from '../../../components/Input'

function SearchSection() {
    const [query, setQuery] = useState('')
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <Input name='search' type='text' onChange={(e) => { setQuery(e.target.value); alert(query) }} placeholder='type something..' />
        </div>
    )
}

export default SearchSection;
