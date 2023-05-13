import React, { useState } from 'react'

const textInputStyles = `
                          md:w-3/4 w-full
                          text-center
                          border-2 border-black
                          rounded-3xl
                          p-5
                          font-balsamiq
                          shadow-2xl shadow-gray-600
                          focus:outline-none focus:shadow-black
                          resize-none
                         `

const buttonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none  hover:cursor-pointer hover:bg-ruby-red hover:border-ruby-red border-4 border-black transition-all duration-700 ease-out font-mono'

function AddBookToShelveForm({ shelves, book, onSubmit }) {
  const handleRequestInfoChange = (shelveId) => {
    onSubmit({
      bookId: book.id,
      shelveId: shelveId
    })
  }

  return (
    <div className='flex flex-wrap justify-center items-center w-full gap-3'>
      {shelves.map(shelve => {
        return (
          <div key={shelve.id} className='flex items-center justify-center w-5/6'>
            <button className={buttonStyles} onClick={() => { handleRequestInfoChange(shelve.id) }}>{shelve.title}</button>
          </div >
        )
      })}
    </div>
  )
}

export default AddBookToShelveForm;
