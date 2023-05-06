import React from 'react'
import LoginForm from '../../../components/form/LoginForm'
import helpers from '../../../helpers'
import Heading from '../../../components/Heading'
import Subheading from '../../../components/Subheading'

function LoginPage() {
  helpers.setPageTitle('Login')
  return (
    <>
      <div className='flex flex-col justify-start items-center w-full gap-10'>
        <Heading />
        <Subheading>
          Long Time No See
        </Subheading>
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage;
