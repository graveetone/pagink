import React, { useContext } from 'react'
import Header from './../../../../components/header/Header'
import RegistrationInput from './../components/RegistrationInput'
import { RegistrationContext } from '../../../../contexts/RegistrationContext';

function PasswordConfirmation() {
  const {registrationState} = useContext(RegistrationContext);

  const validations = [
    {
      rule: (value) => value === registrationState.password.value,
      message: 'Password confirmation must match with password'
    }
  ];

  const description = (
    <>
      <span>We just want to make sure you remembered it</span>
    </>
  )

  return (
    <>
      <Header subheading={"Type you superstrong password again"} />
      <RegistrationInput
        name='passwordConfirmation'
        type='password'
        placeholder='password confirmation'
        description={description}
        validations={validations} />
    </>
  )
}

export default PasswordConfirmation;
