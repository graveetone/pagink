import React, { useState, useContext, useEffect, useRef } from "react"
import Input from '../Input'
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useLoginMutation } from './../../api/queries/auth'
import helpers from "../../helpers";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [fieldsValues, setFieldsValues] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate()
  const { mutateAsync: login } = useLoginMutation();

  const { dispatchCurrentUser } = useContext(CurrentUserContext);

  const handleFieldChange = event => {
    setFieldsValues(previousValues => ({
      ...previousValues,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault()
    try {
      const response = await login({ user: fieldsValues });

      const token = response.headers.authorization;
      const currentUser = response.data;

      dispatchCurrentUser({
        type: 'UPDATE_CURRENT_USER',
        payload: currentUser
      })

      helpers.setTokenInSession(token);
      navigate('/')
    } catch (error) {
      console.log(error); //TODO: display error for user
    }
  };


  const submitButtonStyles = 'flex justify-center w-auto text-center bg-black text-white rounded-2xl p-4 font-medium shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

  const areFieldsFilled = fieldsValues.username && fieldsValues.password.length >= 6
  const passwordFieldRef = useRef()

  const focusPasswordField = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      passwordFieldRef.current.focus();
    };
  }
  return (
    <>
      <form className='flex flex-col items-center justify-center w-full gap-10 p-5 font-mono'>
        <Input name='username' type='text' onChange={handleFieldChange} placeholder='username' params={'autofocus'} onKeyDown={focusPasswordField} />
        <Input ref={passwordFieldRef} name='password' type='password' onChange={handleFieldChange} placeholder='password' />

        {areFieldsFilled &&
          <input className={submitButtonStyles} type='submit' name='submit' value='Go to PagInk' onClick={handleSubmitButtonClick} />
        }
      </form>
    </>
  )
}

export default LoginForm;
