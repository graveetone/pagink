import React, { useContext, useEffect } from 'react'
import RegistrationInput from './../components/RegistrationInput'
import { RegistrationContext } from '../../../../contexts/RegistrationContext';
import Subheading from '../../../../components/Subheading';

function PasswordConfirmation() {
  const { registrationState } = useContext(RegistrationContext);

  const validations = [
    {
      rule: (value) => value === registrationState.password.value,
      message: 'Password confirmation must match with password'
    }
  ];

  const { dispatchRegistrationState } = useContext(RegistrationContext);

  useEffect(() => {
    dispatchRegistrationState({
      type: 'SET_VALIDATIONS',
      payload: {
        fieldName: 'passwordConfirmation',
        validations: validations
      }
    })
  }, [])

  const description = (
    <>
      <span>We just want to make sure you remembered it</span>
    </>
  )

  return (
    <>
      <Subheading>
        Type you superstrong password again
      </Subheading>
      <RegistrationInput
        name='passwordConfirmation'
        type='password'
        placeholder='password confirmation'
        description={description}
      />
    </>
  )
}

export default PasswordConfirmation;
