import React from 'react'
import Form from '../../components/form/Form'
import Header from '../../components/Header'
import { setPageTitle } from '../../helpers'

function LoginPage() {
  setPageTitle('Login')
  return (
    <>
      <div className='flex flex-col h-screen justify-start items-center gap-10'>
        <Header subheading={'Long Time No See You, Reader'}/>
        <Form />
      </div>

    </>
  )
}

export default LoginPage;
