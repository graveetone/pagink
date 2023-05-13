import React from 'react'
import { Link } from 'react-router-dom';

function Button({ icon, href, onClick, className, children }) {
  return (
    <Link
      className={`transition hover:cursor-pointer duration-300 border-2 border-black
              rounded-lg text-lg flex justify-center items-center
              p-3 min-w-[60px]
              min-h-[50px] hover:bg-black hover:border-black ${className}`}
      to={href}
      onClick={onClick}
    >
      {icon}
      {children}
    </Link>
  )
}

export default Button;
