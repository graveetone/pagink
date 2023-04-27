import React from 'react'
import buttons from './buttons'
import Header from './../../../components/header/Header'

const imageBorderColorsByUserStatus = {
    'ONLINE': 'ruby-red',
    'OFFLINE': 'gray-400',
    'SUSPENDED': 'black'

}

function UserHeader({ user }) {
    const borderColor = imageBorderColorsByUserStatus[user.status] || ''
    return (
        <>
            <div className='flex w-full'>
                <Header heading={user.username} subheading={
                    <div className='flex w-full justify-start items-center'>
                        <div className='w-full flex flex-col items-center justify-center gap-5 text-sm md:text-xl'>
                            <div className={'flex items-center justify-center m-3'}>
                                <img src={user.image_url} alt={user.username} className={`rounded-3xl xs:w-[40vh] xs:h-auto sm:w-[40vh] sm:auto md:w-[50vh] md:auto lg:w-[55vh] lg:h-auto object-cover object-center border-8 border-${borderColor}`} />
                            </div>
                            <div className='flex xs:flex-col sm:flex-row sm:gap-3 w-full justify-center'>
                                <span>
                                    Приєднався(-лася)
                                </span>
                                <span>
                                    3 місяці тому
                                </span>
                            </div>
                            <div className='flex xs:flex-col sm:flex-row sm:gap-3'>
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
