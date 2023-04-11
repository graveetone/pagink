import React from 'react'
import MenuItem from '../menu_item/MenuItem'

function Menu() {
    return (
        <div className='flex sm:w-full lg:w-3/4 h-full items-end justify-around fixed'>
                <MenuItem key='1' icon={'🏚'} caption={'home'} url={'/'}></MenuItem>
                <MenuItem key='2' icon={'📚'} caption={'my books'} url={'/books'}></MenuItem>
                <MenuItem key='3' icon={'🔎'} caption={'explore'} url={'/explore'}></MenuItem>
                <MenuItem key='4' icon={'⚙️'} caption={'settings'} url={'/settings'}></MenuItem>
                <MenuItem key='5' icon={'🏃'} caption={'logout'} url={'/logout'}></MenuItem>
        </div>

    )
}

export default Menu;