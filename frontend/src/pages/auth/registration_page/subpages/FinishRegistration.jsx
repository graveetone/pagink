import React from 'react'
import { useContext } from 'react'
import { RegistrationContext } from '../../../../contexts/RegistrationContext'
import Subheading from '../../../../components/Subheading';

function FinishRegistration() {
  const { registrationState } = useContext(RegistrationContext);

  return (
    <div className='flex flex-col justify-center items-center text-center w-full'>
      <Subheading>
        Hey, world! Look at the new PagInk user
      </Subheading>

      <div className="flex items-center justify-center">
        <img src={registrationState.photo.value} alt='' className="rounded-3xl w-[250px] h-[250px] object-cover object-center" />
      </div>
      <table className='flex items-center text-xl md:text-2xl font-roboto p-3 text-center'>
        <tbody className='flex flex-col justify-start'>
          <tr className='flex gap-12'>
            <td>Username:</td>
            <td>{registrationState.username.value}</td>
          </tr>
          <tr className='flex gap-12'>
            <td>Email:</td>
            <td>{registrationState.email.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FinishRegistration;