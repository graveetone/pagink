import React from 'react'
const textInputStyles = `md:w-3/4 w-full
h-[30vh]
                         text-center
                         border-2 border-black
                         rounded-3xl
                         p-5
                         
                         font-balsamiq
                         shadow-2xl shadow-gray-600
                         focus:outline-none focus:shadow-black
                         resize-none
                         `

const editProfileButtonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

function GinkForm({onSubmit}) {
  return (
    <div className='flex flex-col justify-center items-center w-full p-12 gap-6'>
      <textarea className={textInputStyles}
        name='ginkText'
        placeholder={'Type here...'} />

      <div className='flex items-center justify-center xs:w-2/3 md:w-2/5'>
        <button className={editProfileButtonStyles} onClick={onSubmit}>Gink it!</button>
      </div >
    </div>
  )
}

export default GinkForm;
