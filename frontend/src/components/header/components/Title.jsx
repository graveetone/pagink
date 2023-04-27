import React from 'react'

function Title({text}) {
    return (
        <>
            <div className='text-center xs:text-8xl sm:text-8xl md:text-8xl md:w-auto font-amatic'>
                {text}
            </div>
        </>
    )
}

export default Title;
