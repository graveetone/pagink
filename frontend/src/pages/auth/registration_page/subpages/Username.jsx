import React, { useEffect, useContext, useState } from 'react';
import RegistrationInput from './../components/RegistrationInput';
import { RegistrationContext } from '../../../../contexts/RegistrationContext';
import Subheading from '../../../../components/Subheading';
import { validateUsername } from '../../../../api/queries/auth';

function Username() {
    const { registrationState, dispatchRegistrationState } = useContext(RegistrationContext);

    useEffect(() => {
        validateUsername(registrationState.username.value, (result) => {
            const validations = [
                {
                    rule: (value) => value && value.trim('').length >= 3,
                    message: 'Username should have at least 3 characters',
                },
                {
                    rule: (value) => result.data.usernameValid,
                    message: 'Username has to be unique',
                },
            ];
            dispatchRegistrationState({
                type: 'SET_VALIDATIONS',
                payload: {
                    fieldName: 'username',
                    validations: validations,
                },
            });
        })
    }, [registrationState.username.value]);



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