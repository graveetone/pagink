import React, { useContext, useEffect, useCallback, useState } from 'react'
import Input from './../../../../components/Input'
import { RegistrationContext } from './../../../../contexts/RegistrationContext';

function RegistrationInput({ name, type, placeholder, description }) {
    const { registrationState, dispatchRegistrationState } = useContext(RegistrationContext);

    const handleFieldValueChange = useCallback(event => {
        dispatchRegistrationState({
            type: 'UPDATE_FIELD',
            payload: {
                fieldName: event.target.name,
                value: event.target.value
            }
        })
    }, [registrationState]);

    return (
        <div className='flex items-center w-full gap-10 flex-col'>
            <div className='flex z-10 flex-col justify-center items-center w-3/4 font-sans text-xl text-center font-roboto gap-2'>
                {description}
            </div>
            <div className='flex flex-col justify-center items-center w-3/4'>
                <Input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={event => {
                        handleFieldValueChange(event);
                    }}
                    value={registrationState[name].value}
                />
            </div>
        </div>
    )
}

export default RegistrationInput;