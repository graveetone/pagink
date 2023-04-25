import React from 'react'
import RegistrationInput from './../components/RegistrationInput'
import Header from './../../../../components/header/Header'
function Email() {
  const description = (
    <>
      <span>No spam. We promise</span>
      <span>We'll need it if you forget password or get some important notification</span>
    </>
  )
  return (
    <>
      <Header subheading={"Please specify your email address"} />
      <RegistrationInput name='email' type='email' placeholder='email' description={description} />
    </>
  )
}

export default Email;
