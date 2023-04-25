import React from 'react'
import RegistrationInput from './../components/RegistrationInput'

import Header from './../../../../components/header/Header'

function Username() {
    const description = (
        <>
            <span>Everyone here will know you by it.</span>
            <span>It must be unique so that we do not confuse you with anyone else</span>
        </>
    )
    return (
        <>
            <Header subheading={"Please think up an interesting username"} />
            <RegistrationInput name='username' type='text' placeholder='username' description={description} />
        </>
    )
}

export default Username;
