import React from 'react'

import Logo from './../components/header/components/Logo'
import Title from './../components/header/components/Title'
import UserGreeting from './../components/header/components/UserGreeting'

function Heading({ children }) {
    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <div className='flex flex-col justify-center items-center w-full gap-5'>
                {children ? (
                    <Title text={children} />
                ) : (
                    <>
                        <Logo />
                        <UserGreeting />
                    </>
                )}
            </div>
        </div >
    )
}

export default Heading;
