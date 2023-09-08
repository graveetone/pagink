import React, { useContext, useEffect } from 'react'
import RegistrationInput from './../components/RegistrationInput'
import helpers from '../../../../helpers';
import { RegistrationContext } from '../../../../contexts/RegistrationContext';
import Subheading from '../../../../components/Subheading';
import { validateEmail } from '../../../../api/queries/auth';

function Email() {
  const { registrationState, dispatchRegistrationState } = useContext(RegistrationContext);

  useEffect(() => {
    validateEmail(registrationState.email.value, (result) => {
      const validations = [
        {
          rule: (value) => value && value.trim('').length > 0,
          message: 'Please provide your email'
        },
        {
          rule: (value) => helpers.emailTester(value),
          message: 'Please check your email as it seems to be invalid'
        },
        {
          rule: (value) => result.data.emailValid,
          message: 'Email must be unique'
        },
      ];
      dispatchRegistrationState({
        type: 'SET_VALIDATIONS',
        payload: {
          fieldName: 'email',
          validations: validations,
        },
      });
    })
  }, [registrationState.email.value]);

  const description = (
    <>
      <span>No spam. We promise</span>
      <span>We'll need it if you forget password or get some important notification</span>
    </>
  )
  return (
    <>
      <Subheading>
        Please specify your email address
      </Subheading>
      <RegistrationInput
        name='email'
        type='email'
        placeholder='email'
        description={description}
      />
    </>
  )
}

export default Email;