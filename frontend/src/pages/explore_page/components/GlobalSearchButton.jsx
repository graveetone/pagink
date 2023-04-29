import React from 'react'

function GlobalSearchButton({ onClick }) {
    const submitButtonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

    return (
        <div className={`flex items-center justify-center w-1/2 md:w-1/3`}>
            <button className={submitButtonStyles} onClick={onClick}>Global Search</button>
        </div >
    )
}

export default GlobalSearchButton;
