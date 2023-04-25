import React from 'react'

function RegistrationButton({ caption, width, onClick }) {
  const submitButtonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-2xl p-4 font-medium shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

  return (
    <div className={`flex items-center justify-center ${width}`}>
      <button className={submitButtonStyles} onClick={onClick}>{caption}</button>
    </div >
  )
}

export default RegistrationButton;
