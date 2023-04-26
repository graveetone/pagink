import React, { useState, useContext } from "react"
import Input from '../Input'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function LoginForm() {
  const [fieldsValues, setFieldsValues] = useState({
    username: false,
    password: false
  })

  const { dispatchCurrentUser } = useContext(CurrentUserContext);

  const handleFieldChange = event => {
    setFieldsValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmitButtonClick = event => {
    dispatchCurrentUser(
      {
        type: 'UPDATE_FIELD',
        payload: {
          fieldName: 'username',
          value: 'graveetone'
        }
      })
      alert('Logged In')
  }

  const submitButtonStyles = 'flex justify-center w-auto text-center bg-black text-white rounded-2xl p-4 font-medium shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

  const areFieldsFilled = fieldsValues.username && fieldsValues.password.length >= 6
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full gap-10 p-5 font-mono'>
        <Input name='username' type='text' onChange={handleFieldChange} placeholder='username' />
        <Input name='password' type='password' onChange={handleFieldChange} placeholder='password' />

        {areFieldsFilled &&
          <input className={submitButtonStyles} type='submit' name='submit' value='Go to PagInk' onClick={handleSubmitButtonClick} />
        }
      </div>
    </>
  )
}

export default LoginForm;