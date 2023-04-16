import React from 'react'
import MenuItem from '../menu_item/MenuItem'
import icons from '../../components/icons'
function Menu() {
    return (
        <div className='flex xs:w-full lg:w-3/4 h-1/7 bottom-0 items-end justify-around fixed'>
            <MenuItem key='1' icon={icons.home} caption={'home'} url={'/'}></MenuItem>
            <MenuItem key='2' icon={icons.books} caption={'shelves'} url={'/shelves'}></MenuItem>
            <MenuItem key='3' icon={icons.explore} caption={'explore'} url={'/explore'}></MenuItem>
            <MenuItem key='4' icon={icons.settings} caption={'settings'} url={'/settings'}></MenuItem>
            <MenuItem key='5' icon={icons.logout} caption={'logout'} url={'/logout'}></MenuItem>
        </div>

    )
}

export default Menu;
