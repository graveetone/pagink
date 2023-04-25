import React from 'react'
import Header from './../../../../components/header/Header'
import { useContext } from 'react'
import { RegistrationContext } from '../../../../contexts/RegistrationContext'

function FinishRegistration() {
  const { registrationState } = useContext(RegistrationContext);
  
  return (
    <div className='flex flex-col justify-center items-center text-center w-full'>
      <Header subheading={"Hey, world! Look at the new PagInk user"} />

      <div className="flex items-center justify-center">
        <img src={registrationState.photo} alt='' className="rounded-3xl w-[250px] h-[250px] object-cover object-center" />
      </div>
      <table className='flex items-center text-xl md:text-2xl font-roboto p-3 text-center'>
        <tbody className='flex flex-col justify-start'>
          <tr className='flex gap-12'>
            <td>Username:</td>
            <td>graveetone</td>
          </tr>
          <tr className='flex gap-12'>
            <td>Email:</td>
            <td>zastavskijs@gmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FinishRegistration;
