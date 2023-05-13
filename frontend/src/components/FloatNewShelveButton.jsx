import React from 'react'
import Button from './Button'
import icons from './icons'

function FloatNewShelveButton({ onClick }) {
    return (
        <div className='flex fixed top-0 right-0 w-1/5'>
            <Button
                icon={icons.addShelve}
                className={'w-full h-full rounded-none rounded-b-2xl border-ruby-red bg-ruby-red text-white'}
                onClick={onClick}
            />
        </div>
    )
}

export default FloatNewShelveButton;
