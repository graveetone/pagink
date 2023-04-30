import React from 'react'
import LoginForm from '../../../components/form/LoginForm'
import Header from '../../../components/header/Header'
import helpers from '../../../helpers'

function LoginPage() {
  helpers.setPageTitle('Login')
  return (
    <>
      <div className='flex flex-col justify-start items-center w-full gap-10'>
        <Header subheading={'Long Time No See'} />
        <LoginForm />
      </div>
    </>
  )
}

export default LoginPage;
