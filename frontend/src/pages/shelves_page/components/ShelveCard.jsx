import React from 'react'
import { Link } from 'react-router-dom'

function ShelveCard({ shelve }) {
    return (
        <>
            <Link to={`/shelve/${shelve.id}`} className='flex flex-col xs:w-full md:w-1/4 gap-1'>
                <div className='flex justify-around items-end h-1/4 w-full'>
                    <div className='w-1/3 object-cover'>
                        <img src={shelve.books[0]?.image_url} alt={shelve.books[0]?.title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
                    </div>
                    <div className='w-1/4 object-cover'>
                        <img src={shelve.books[1]?.image_url} alt={shelve.books[1]?.title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
                    </div>
                    <div className='w-1/3 object-cover'>
                        <img src={shelve.books[2]?.image_url} alt={shelve.books[2]?.title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
                    </div>
                </div>
                <div className='flex flex-col gap-3 font-balsamiq'>
                    <div className='bg-black w-full h-3 shadow-lg rounded-lg shadow-black' />
                    <p className='text-center text-xl'>{`${shelve.title} (${shelve.books.length})`}</p>
                </div>
            </Link>
        </>
    );
}

export default ShelveCard;
