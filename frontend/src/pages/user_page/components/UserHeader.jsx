import React from 'react'
import buttons from './buttons'
import Image from './../../../components/Image'

import Heading from '../../../components/Heading';
import Subheading from '../../../components/Subheading';

function UserHeader({ user }) {
    return (
        <>
            <Heading>
                {user.username}
            </Heading>
            <div className='flex flex-col w-full justify-around gap-6'>
                <Subheading>
                    <span className='text-ruby-red'>
                        {user.status}
                    </span>
                </Subheading>

                <div className='flex flex-col w-full md:w-full'>
                    <div className='w-full'>
                        <Image src={user.image_url} alt={user.username} width={'w-56'} height={'h-56'} />
                    </div>
                    <div className='flex flex-col w-full gap-3 text-center h-full'>
                        <div className='flex justify-evenly items-center h-full w-full'>
                            <div className='flex flex-col text-center w-full h-full justify-center items-center '>
                                <span className='text-lg'>Bookmates</span>
                                <span className='text-2xl font-black text-ruby-red'>{user.bookmatesCount}</span>
                            </div>
                            <div className='flex flex-col justify-center items-center text-center w-full'>
                                <span className='text-lg'>Joined</span>
                                <span className='text-2xl font-black text-ruby-red'>{user.membershipDuration}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-evenly items-center'>
                    {buttons(user)}
                </div>
            </div>
        </>
    )
}

export default UserHeader;
