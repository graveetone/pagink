import React from 'react'
import { data } from './data'
import { setPageTitle } from '../../helpers'
import ShelvesHeader from './ShelvesHeader';

function ShelveCard() {
  return (
    <>
      <a href='/shelve' className='flex flex-col xs:w-full md:w-1/3 m-5'>
        <div className='flex justify-around items-end h-1/4 w-full'>
          <div className='w-1/3 object-cover'>
            <img src={data.shelves[0].books[0].image_url} alt={data.shelves[0].books[0].title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
          </div>
          <div className='w-1/4 object-cover'>
            <img src={data.shelves[0].books[1]?.image_url} alt={data.shelves[0].books[1].title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
          </div>
          <div className='w-1/3 object-cover'>
            <img src={data.shelves[0].books[2].image_url} alt={data.shelves[0].books[2].title} className="rounded-tl-md rounded-bl-md rounded-br-lg w-full md:w-full h-auto object-fill" />
          </div>
        </div>

        <div className='bg-black w-full h-4 shadow-xl rounded-lg shadow-black my-1' />
        <p className='text-center text-xl'>{`${data.shelves[0].title} (${data.shelves[0].books.length})`}</p>
      </a>
    </>
  );
}

function Shelves() {
  setPageTitle(`Shelves by ${data.author.username}`)
  return (
    <>
    <ShelvesHeader author={data.author}/>
      <div className="flex flex-wrap justify-center w-full items-center">

        <ShelveCard />
        <ShelveCard />
      </div>
    </>
  )
}

export default Shelves;
