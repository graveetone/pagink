import React from 'react'
import buttons from './buttons'
import Header from './../../../components/header/Header'
import Image from './../../../components/Image'

function UserHeader({ user }) {
    return (
        <>
            <div className='flex w-full'>
                <Header heading={user.username} subheading={
                    <div className='flex w-full justify-start items-center'>
                        <div className='w-full flex flex-col items-center justify-center gap-5 text-xl'>
                            <div className='flex'>
                                <Image src={user.image_url} width={'w-72'} height={'h-72'} />
                            </div>
                            <div className='flex xs:flex-col sm:flex-row sm:gap-3 w-full justify-center'>
                                <span>
                                    Joined 3 month ago
                                </span>
                            </div>
                            <div className='flex xs:flex-col sm:flex-row sm:gap-3'>
                                <span>
                                    {user.status}
                                </span>
                            </div>
                            <div className='xs:hidden md:flex flex-row justify-center items-center gap-10 w-full'>
                                {buttons(user)}
                            </div>
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
