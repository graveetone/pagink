import React from 'react'
import MenuItem from '../menu_item/MenuItem'
import icons from '../icons'
function LoginMenu() {
    const captions = {
        uk: {
            main: 'Головна',
            login: "Увійти",
            signUp: "Приєднатися",
        },
        en: {
            main: 'Home',
            login: "Log In",
            signUp: "Join",
        }
    }

    const locale = 'uk'
    return (
        <div className='flex xs:w-full md:w-3/4 lg:w-3/4 bottom-0 justify-evenly fixed'>
            <MenuItem key='1' icon={icons.logIn} caption={captions[locale].login} url={'/login'}></MenuItem>
            <MenuItem key='2' icon={icons.home} caption={captions[locale].main} url={'/'}></MenuItem>
            <MenuItem key='3' icon={icons.signUp} caption={captions[locale].signUp} url={'/sign_up'}></MenuItem>
        </div>

    )
}

export default LoginMenu;
