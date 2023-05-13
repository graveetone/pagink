import React from 'react'
import Button from './Button'
import icons from './icons'

function AddBookToShelveButton({ onClick }) {
    return (
        <Button
            icon={icons.shelveBook}
            className={'flex gap-3 rounded-full border-ruby-red bg-ruby-red text-white hover:bg-black'}
            onClick={onClick}
        >
            <p>
                Add this book to shelve
            </p>
        </Button>
    )
}

export default AddBookToShelveButton;
