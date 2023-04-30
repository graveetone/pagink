import React, { useState } from 'react'
import Header from './../../../../components/header/Header'
import RegistrationInput from './../components/RegistrationInput'
import icons from './../../../../components/icons'
import helpers from './../../../../helpers'

function Password() {
    const validations = [
        {
            rule: (value) => value && value.trim('').length > 0,
            message: 'Please provide your password'
        },
        {
            rule: (value) => helpers.passwordTester(value),
            message: 'Password must have 6+ chars. One letter, one number and one special character is required'
        },
    ];

    const [passwordVisible, setPasswordVisible] = useState(false)
    let fieldType = passwordVisible ? 'text' : 'password'
    let currentIcon = passwordVisible ? icons.hide : icons.see

    const description = (
        <>
            <span>Your security is important for us as well as for you</span>
            <span>It should be at least 6 chars long</span>
            <span>Don't hesitate using letters, numbers, special symbols, upper and lower cases</span>
            <div className='flex justify-center items-center'>
                <button onClick={() => setPasswordVisible(!passwordVisible)}>{currentIcon}</button>
            </div>
        </>
    )

    return (
        <>
            <Header subheading={"Please think up a good password"} />
            <div className='flex justify-center items-center w-full'>
                <RegistrationInput
                    name='password'
                    type={fieldType}
                    placeholder='password'
                    description={description}
                    validations={validations}
                />
            </div>
        </>
    )
}

export default Password;
