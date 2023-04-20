import React from 'react'
import buttons from './buttons'

function UserHeader({user}) {
    return (
        <>
            <div className='flex flex-row w-full items-center justify-around h-full'>
                <div className="flex items-center justify-center xs:w-[35vh] xs:h-[30vh] sm:w-[30vh] sm:h-[30vh] m-3 md:w-[45vh] md:h-[45vh] lg:w-[50vh] lg:h-[50vh]">

                    <img src={user.image_url} alt={user.username} className="rounded-3xl w-full md:w-3/4 h-3/4 object-cover object-center" />
                </div>
                <div className='flex flex-col items-center justify-center w-3/4 md:w-2/3 xs:gap-5 md:gap-10 text-center'>
                    <p className='xs:text-3xl sm:text-4xl md:text-6xl w-full'>
                        {user.username}
                    </p>
                    <p className="flex flex-col md:flex-row justify-center items-center xs:w-3/4 w-full sm:text-lg xs:text-sm md:text-lg">
                        <span>
                            Joined PagInk 3 month ago
                        </span>
                        <span className='mx-2 xs:invisible md:visible'>|</span>
                        <span>
                            Last seen 5 minutes ago
                        </span>
                    </p>
                    <div className='xs:hidden md:flex flex-row justify-center items-center gap-3 w-full'>
                        {buttons(user)}
                    </div>
                </div >
            </div>
            <div className='xs:visible md:hidden flex flex-row justify-center md:justify-end items-center xs:w-3/4 xs:gap-3 md:gap-3 md:w-full'>
                {buttons(user)}
            </div>
        </>
    )
}

export default UserHeader;
