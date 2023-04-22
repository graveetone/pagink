import React from 'react'

function Title({text}) {
    return (
        <>
            <div className='text-center xs:text-4xl sm:text-6xl md:text-7xl md:w-auto font-fredoka'>
                {text}
            </div>
        </>
    )
}

export default Title;
