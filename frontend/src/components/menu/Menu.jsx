import React, { useContext } from 'react'
import MenuItem from '../menu_item/MenuItem'
import icons from '../../components/icons'
import { useState, useEffect, useRef } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const hiddeableMenu = false;
function Menu() {
    const [isMenuVisible, setIsMenuVisible] = useState(!hiddeableMenu)
    const { currentUser } = useContext(CurrentUserContext);

    const divRef = useRef()

    useEffect(() => {
        divRef.current.addEventListener('click', () => {
            window.scrollTo(0, 0)
        });
    })

    useEffect(() => {
        if (hiddeableMenu) {
            function hideMenu(event) {
                if (isMenuVisible && divRef.current && !divRef.current.contains(event.target)) {
                    setIsMenuVisible(false)
                }
            }

            document.addEventListener('mousedown', hideMenu);
        }
    }, [isMenuVisible])

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
        <>
            {
                isMenuVisible || !hiddeableMenu ? (

                    <div ref={divRef} className={'flex xs:w-full md:w-3/4 lg:w-3/4 h-1/7 bottom-0 justify-evenly fixed sm:gap-2'}
                        onMouseLeave={() => { setIsMenuVisible(!hiddeableMenu) }}>
                        <MenuItem key='1' icon={icons.home} caption={captions[locale].home} url={'/'}></MenuItem>
                        <MenuItem key='2' icon={icons.shelves} caption={captions[locale].shelves} url={`/shelves/${currentUser.id}`}></MenuItem>
                        <MenuItem key='5' icon={icons.user} caption={captions[locale].profile} url={`/user/${currentUser.id}`}></MenuItem>
                        <MenuItem key='3' icon={icons.explore} caption={captions[locale].explore} url={'/explore'}></MenuItem>
                        <MenuItem key='4' icon={icons.settings} caption={captions[locale].settings} url={'/settings'}></MenuItem>
                    </div>
                ) : (
                    <div className={'flex xs:w-1/2 sm:w-1/3 md:w-1/5 lg:w-3/4 bottom-0 fixed'} onMouseEnter={() => setIsMenuVisible(hiddeableMenu)} >
                        <div className='flex justify-center items-center rounded-t-2xl bg-black xs:px-12 md:px-24 py-2 flex-grow'>
                            <div className='rounded-full bg-ruby-red py-1 flex-grow'>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Menu;
