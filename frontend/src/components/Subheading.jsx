import React from 'react'

function Subheading({ children }) {
    return (
        <div className='text-2xl font-balsamiq tracking-wider text-center w-full flex justify-center items-center gap-3'>
            {children}
        </div>
    )
}

export default Subheading;
