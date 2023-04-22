import React from 'react'
import { NavLink } from 'react-router-dom'

function ShelveCard({ shelve }) {
    return (
        <>
            <NavLink to='/shelve' className='flex flex-col xs:w-full md:w-1/4 m-5'>
                <div className='flex justify-around items-end h-1/4 w-full'>
                    <div className='w-1/3 object-cover'>
                        <img src={shelve.books[0].image_url} alt={shelve.books[0].title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
                    </div>
                    <div className='w-1/4 object-cover'>
                        <img src={shelve.books[1]?.image_url} alt={shelve.books[1].title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
                    </div>
                    <div className='w-1/3 object-cover'>
                        <img src={shelve.books[2].image_url} alt={shelve.books[2].title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
                    </div>
                </div>

                <div className='bg-black w-full h-4 shadow-xl rounded-lg shadow-black my-1' />
                <p className='text-center text-xl'>{`${shelve.title} (${shelve.books.length})`}</p>
            </NavLink>
        </>
    );
}

export default ShelveCard;
