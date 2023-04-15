import React from 'react'
import RaitingStar from './RaitingStar';

function BookInfo({ data }) {
  const MAX_RAITING = 5;
  const raiting = Math.round(data.average_raiting)
  const filled_stars = [...Array(raiting)].map((e, i) => <RaitingStar filled={true} key={i} />)

  const unfilled_stars = [...Array(MAX_RAITING - raiting)].map((e, i) => <RaitingStar filled={false} key={i} />)



  return (
    <>
      <div className='flex flex-col items-center justify-center h-full xs:w-full sm:w-full md:w-1/2 '>
        <p className='text-center text-gray-600 text-4xl p-2 my-4'>About this book</p>
        <div className='w-3/4 rounded-3xl bg-gray-300 border-2 border-gray-400'>
          <table cellPadding={12} className='w-full'>
            <tr>
              <td>
                <span className='text-gray-600 text-xl'>ISBN: </span>
              </td>
              <td>
                <span className='text-xl'>{data.isbn}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className='text-gray-600 text-xl'>Pages: </span>
              </td>
              <td>
                <span className='text-xl'>{data.pages_count}</span>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className='flex justify-center items-center flex-col'>
                  <div className='flex justify-center items-center'>{filled_stars}{unfilled_stars}</div>
                  <div className='text-gray-600 text-lg'>based on <span className='font-black text-xl'>{data.raitings_count}</span> raitings</div>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="flex justify-center items-center text-center">
                  <div className='text-gray-600 text-lg'>
                    Users shelved this book <span className='font-black text-xl text-black'>{data.shelves_count}</span> times
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div >
    </>
  )
}

export default BookInfo

