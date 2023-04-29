import React from 'react'
import { Link } from 'react-router-dom';

function Button({ icon, href }) {
  return (
    <Link
      className='transition hover:cursor-pointer duration-500 border-2 border-black
              rounded-lg text-lg flex justify-center items-center
              p-3 hover:text-white hover:bg-black min-w-[60px]
              min-h-[50px]'
      to={href}
    >
      {icon}

    </Link>
  )
}

export default Button;
