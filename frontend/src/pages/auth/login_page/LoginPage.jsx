import React from 'react'
import Form from '../../../components/form/Form'
import Header from '../../../components/header/Header'
import { setPageTitle } from '../../../helpers'

function LoginPage() {
  setPageTitle('Login')
  return (
    <>
      <div className='flex flex-col justify-start items-center w-full gap-10'>
        <Header subheading={'Long Time No See'} />
        <Form />
      </div>
    </>
  )
}

export default LoginPage;
