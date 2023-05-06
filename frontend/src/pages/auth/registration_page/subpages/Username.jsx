import React, { useEffect, useContext } from 'react';
import RegistrationInput from './../components/RegistrationInput';
import { RegistrationContext } from '../../../../contexts/RegistrationContext';
import Subheading from '../../../../components/Subheading';

function Username() {
    const { dispatchRegistrationState } = useContext(RegistrationContext);
    const validations = [
        {
            rule: (value) => value && value.trim('').length >= 3,
            message: 'Username should have at least 3 characters'
        },
        {
            rule: (value) => true,
            message: 'Username has to be unique'
        }
    ];

    useEffect(() => {
        dispatchRegistrationState({
            type: 'SET_VALIDATIONS',
            payload: {
                fieldName: 'username',
                validations: validations
            }
        })
    }, [])
    const description = (
        <>
            <span>Everyone here will know you by it.</span>
            <span>It must be unique so that we do not confuse you with anyone else</span>
        </>
    );

    return (
        <>
            <Subheading>
                Please think up an interesting username
            </Subheading>
            <RegistrationInput
                name="username"
                type="text"
                placeholder="username"
                description={description}
            />
        </>
    );
}

export default Username;