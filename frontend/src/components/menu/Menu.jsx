import React from 'react'
import MenuItem from '../menu_item/MenuItem'
import icons from '../../components/icons'

function Menu() {
    const captions = {
        uk: {
            home: "Головна",
            shelves: "Полиці",
            profile: "Профіль",
            explore: "Рекомендації",
            settings: "Налаштування"
        },
        en: {
            home: "Home",
            shelves: "Shelves",
            profile: "Profile",
            explore: "Explore",
            settings: "Settings"
        }
    }

    const locale = 'en'
    return (
        <div className='flex xs:w-full md:w-3/4 lg:w-3/4 h-1/7 bottom-0 justify-evenly fixed sm:gap-2'>
            <MenuItem key='1' icon={icons.home} caption={captions[locale].home} url={'/'}></MenuItem>
            <MenuItem key='2' icon={icons.shelves} caption={captions[locale].shelves} url={'/shelves'}></MenuItem>
            <MenuItem key='5' icon={icons.user} caption={captions[locale].profile} url={'/user'}></MenuItem>
            <MenuItem key='3' icon={icons.explore} caption={captions[locale].explore} url={'/explore'}></MenuItem>
            <MenuItem key='4' icon={icons.settings} caption={captions[locale].settings} url={'/settings'}></MenuItem>
        </div>

    )
}

export default Menu;
