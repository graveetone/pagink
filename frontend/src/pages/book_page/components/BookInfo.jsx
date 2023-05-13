import React from 'react'
import RaitingStar from './RaitingStar';
import AddBookToShelveSection from './AddBookToShelveSection';

function BookInfo({ book }) {
  const MAX_RAITING = 5;
  const raiting = Math.round(book.average_raiting)
  const filled_stars = [...Array(raiting)].map((e, i) => <RaitingStar filled={true} key={i} />)

  const unfilled_stars = [...Array(MAX_RAITING - raiting)].map((e, i) => <RaitingStar filled={false} key={i} />)



  return (
    <>
      <div className='flex flex-col items-center justify-center h-full xs:w-full md:w-full'>
        <div className='flex items-center xs:w-full md:w-3/4 gap-12 flex-col'>
          <table>
            <tbody className='flex flex-col gap-5 justify-center w-auto'>
              <tr className='flex gap-10 xs:text-2xl sm:text-4xl font-balsamiq'>
                <td className='text-black'>ISBN: </td>
                <td className='text-ruby-red'>{book.isbn}</td>
              </tr>
              <tr className='flex gap-10 xs:text-2xl sm:text-4xl font-balsamiq'>
                <td className='text-black'>Pages: </td>
                <td className='text-ruby-red'>{book.pages_count}</td>
              </tr>
              <tr className='flex justify-center items-center flex-col'>
                <td>
                  <div className='flex justify-center items-center'>{filled_stars}{unfilled_stars}</div>
                </td>
                <td>
                  <div className='text-black xs:text-lg md:text-xl font-roboto'>based on <span className='font-black text-ruby-red'>{book.raitings_count}</span> raitings</div>
                </td>
              </tr>
              <tr className="flex justify-center items-center text-center">
                <td className='text-black xs:text-xl md:text-3xl font-roboto'>
                  Users shelved this book <span className='font-black text-ruby-red'>{book.shelves_count}</span> times
                </td>
              </tr>
              <tr className='flex justify-center items-center flex-col'>
                <td>
                  <AddBookToShelveSection book={book} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div >
    </>
  )
}

export default BookInfo;
