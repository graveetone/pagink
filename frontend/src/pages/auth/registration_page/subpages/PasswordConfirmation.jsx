import React from 'react'
import Header from './../../../../components/header/Header'
import RegistrationInput from './../components/RegistrationInput'


function PasswordConfirmation() {
  const description = (
    <>
      <span>We just want to make sure you remembered it</span>
    </>
  )

  return (
    <>
      <Header subheading={"Type you superstrong password again"} />
      <RegistrationInput name='passwordConfirmation' type='password' placeholder='password confirmation' description={description} />
    </>
  )
}

export default PasswordConfirmation;
