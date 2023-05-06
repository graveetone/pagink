import React from 'react'
import Button from './Button'
import icons from './icons'

function FloatPencilButton({ onClick }) {
    return (
        <div className='flex fixed top-0 right-0 w-1/5'>
            <Button
                icon={icons.pencil}
                className={'w-full h-full rounded-none rounded-b-2xl border-ruby-red bg-ruby-red text-white'}
                onClick={onClick}
            />
        </div>
    )
}

export default FloatPencilButton;
