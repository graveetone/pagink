import React from 'react'

const textInputStyles = `md:w-1/2 w-3/4
                         text-center
                         border-2 border-black
                         rounded-2xl
                         p-2
                         font-black
                         font-mono
                         shadow-lg shadow-gray-600
                         focus:outline-none focus:shadow-black
                         `

function Input({ name, type, placeholder, onChange, value }) {
  return (
    <>
      <input className={textInputStyles}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoCapitalize='off' />
    </>
  )
}

export default Input;
