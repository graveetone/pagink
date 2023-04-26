import React from 'react'
import RegistrationInput from './../components/RegistrationInput'
import Header from './../../../../components/header/Header'
import { emailTester } from '../../../../helpers';
function Email() {
  const validations = [
    {
      rule: (value) => value && value.trim('').length > 0,
      message: 'Please provide your email'
    },
    {
      rule: (value) => emailTester(value),
      message: 'Please check your email as it seems to be invalid'
    },
    {
      rule: (value) => true, // TODO: request to check uniqueness
      message: 'Email must be unique'
    },
  ];

  const description = (
    <>
      <span>No spam. We promise</span>
      <span>We'll need it if you forget password or get some important notification</span>
    </>
  )
  return (
    <>
      <Header subheading={"Please specify your email address"} />
      <RegistrationInput
        name='email'
        type='email'
        placeholder='email'
        description={description}
        validations={validations}
      />
    </>
  )
}

export default Email;
