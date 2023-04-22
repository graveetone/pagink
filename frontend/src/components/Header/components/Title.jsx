import React from 'react'

function AppTitleLogo({text}) {
    return (
        <>
            <p className='text-center xs:text-4xl sm:text-6xl md:text-7xl md:w-auto font-fredoka'>
                {text}
            </p>
        </>
    )
}

export default AppTitleLogo;
