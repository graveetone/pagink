import React from 'react'
import buttons from './buttons'
import Header from './../../../components/header/Header'

function UserHeader({ user }) {
    return (
        <>
            <div className='flex flex-row w-full items-center justify-around h-full'>
                <div className="flex items-center justify-center m-3">
                    <img src={user.image_url} alt={user.username} className="rounded-3xl xs:w-[35vh] xs:h-auto sm:w-[40vh] sm:auto md:w-[50vh] md:auto lg:w-[55vh] lg:h-auto object-cover object-center" />
                </div>
                <Header heading={user.username} subheading={
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <div className='flex xs:flex-col sm:flex-row sm:gap-3'>
                            <span>
                                Joined PagInk
                            </span>
                            <span>
                                3 month ago
                            </span>
                        </div>
                        <div className='flex xs:flex-col sm:flex-row gap-3'>
                            <span>
                                Last seen
                            </span>
                            <span>
                                5 minutes ago
                            </span>
                        </div>
                        <div className='xs:hidden md:flex flex-row justify-center items-center gap-10 w-full'>
                            {buttons(user)}
                        </div>
                    </div>
                } />
            </div>
            <div className='visible md:hidden flex flex-row justify-center md:justify-end items-center xs:w-3/4 xs:gap-3 md:gap-3 md:w-full'>
                {buttons(user)}
            </div>
        </>
    )
}

export default UserHeader;
