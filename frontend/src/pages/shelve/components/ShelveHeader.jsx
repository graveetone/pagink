import React from 'react'
import icons from '../../../components/icons'

function ShelveHeader({ shelve }) {
    return (
        <div className='flex flex-row w-full items-center justify-around'>
            <div className="flex items-center justify-center flex-col w-1/3">
                <div className='flex flex-col justify-center items-center md:w-1/3 m-3'>
                    <img src={shelve.author.image_url} alt={shelve.author.username} className="max-w-1/2 w-full h-auto block rounded-3xl" />
                    <p className="xs:text-xl sm:text-2xl italic text-center">{shelve.author.username}</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center w-2/3 text-center'>
                <p className='text-6xl m-3'>
                    {shelve.title}
                </p>
                <p className="w-3/4 text-lg italic">
                    {`${shelve.author.username} created this shelve 1 year ago`}
                </p>
                <p className='pt-6'>
                    {shelve.is_private ? icons.lock : icons.globe}
                </p>
            </div >
        </div>
    )
}

export default ShelveHeader
