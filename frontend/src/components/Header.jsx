import React from 'react'

function Header({ heading, subheading }) {
    return (
        <div className='flex flex-col justify-start items-center gap-5'>
            <div className='flex md:flex-row flex-col justify-center items-center md:gap-8 gap-3'>
                {heading ? (
                    <p className='text-center xs:text-xl sm:text-6xl md:text-7xl font-fredoka'>{heading}</p>
                ) : (
                    <>
                        <p className='text-center xs:text-xl sm:text-6xl md:text-7xl font-fredoka'>Welcome to</p>
                        <img className='xs:w-1/2 sm:w-1/2 md:w-1/4 filter grayscale' src="logo.png" alt="PagInk" />
                    </>
                )}
            </div>
            <p className='text-2xl font-oswald tracking-wider'>{subheading}</p>
        </div >
    )
}

export default Header;
