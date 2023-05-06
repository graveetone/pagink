import React, { forwardRef } from 'react'

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

const Input = forwardRef((props, ref) => {
  return <input className={textInputStyles}
    ref={ref}
    {...props}
    autoCapitalize='off'
    autofocus="yes"
  />
})

export default Input;
