import React from "react";

import Logo from './components/Logo'
import Title from './components/Title'
import UserGreeting from "./components/UserGreeting";

function Header({ heading, subheading }) {
    return (
        <div className='flex flex-col justify-start items-center w-full'>
            <div className='flex md:flex-row flex-col justify-center items-center w-full gap-5'>
                {heading ? (
                    <Title text={heading} />
                ) : (
                    <>
                        <Title text='Welcome to' />
                        <Logo />
                    </>
                )}
            </div>
            {!heading && <UserGreeting />}

            <div className='text-2xl font-balsamiq tracking-wider text-center w-full flex justify-center items-center gap-3'>
                {subheading}
            </div>
        </div >
    )
}

export default Header;
