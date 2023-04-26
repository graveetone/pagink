import React from "react";
import Logo from './components/Logo'
import Title from './components/Title'

function Header({ heading, subheading }) {
    return (
        <div className='flex -z-10 flex-col justify-start items-center gap-5 w-full'>
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
            <div className='text-2xl font-comic-neue tracking-wider text-center w-3/4'>{subheading}</div>
        </div >
    )
}

export default Header;
