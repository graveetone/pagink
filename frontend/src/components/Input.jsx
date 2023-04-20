import React from 'react'

const textInputStyles = `md:w-1/3 w-3/4
                         text-center
                         border-2 border-black
                         rounded-2xl
                         p-2
                         font-medium
                         shadow-lg shadow-gray-600
                         focus:outline-none focus:shadow-black`

function Input({ name, type, placeholder, onChange }) {
  return (
    <input className={textInputStyles}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange} />
  )
}

export default Input;
