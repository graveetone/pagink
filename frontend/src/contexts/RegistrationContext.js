import React, { createContext, useReducer } from 'react';

export const RegistrationContext = createContext();

const initialRegistrationState = {
    username: {
        value: '',
        errors: []
    },
    email: {
        value: '',
        errors: []
    },
    password: {
        value: '',
        errors: []
    },
    passwordConfirmation: {
        value: '',
        errors: []
    },
    photo: {
        value: 'default_user_profile_picture.svg',
        errors: []
    }
};

const registrationReducer = (state, action) => {
    const fieldName = action.payload?.fieldName;
    const isFieldValid = Object.keys(initialRegistrationState).includes(fieldName)
    switch (action.type) {
        case 'RESET':
            return initialRegistrationState;
        case 'RESET_ERRORS':
            return registrationReducer(state, {
                type: 'ADD_ERRORS',
                payload: {
                    fieldName: fieldName,
                    errors: []
                }
            })
        case 'UPDATE_FIELD':
            if (isFieldValid) {
                return {
                    ...state,
                    [fieldName]: {
                        ...state[fieldName],
                        value: action.payload.value
                    }
                };
            }
            else {
                return state;
            }
        case 'ADD_ERRORS':
            if (isFieldValid) {
                return {
                    ...state,
                    [fieldName]: {
                        ...state[fieldName],
                        errors: action.payload.errors
                    }
                };
            }
            else {
                return state;
            }
        default:
            return state;
    }
}

export const RegistrationProvider = ({ children }) => {
    const [registrationState, dispatchRegistrationState] = useReducer(registrationReducer, initialRegistrationState);

    return (
        <RegistrationContext.Provider value={{ registrationState, dispatchRegistrationState }}>
            {children}
        </RegistrationContext.Provider>
    );
};