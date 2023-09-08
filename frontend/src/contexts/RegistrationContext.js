import React, { createContext, useReducer } from 'react';

export const RegistrationContext = createContext();

const initialRegistrationState = {
    username: {
        value: '',
        errors: [],
        validations: []
    },
    email: {
        value: '',
        errors: [],
        validations: []

    },
    password: {
        value: '',
        errors: [],
        validations: []
    },
    passwordConfirmation: {
        value: '',
        errors: [],
        validations: []
    },
    photo: {
        value: '/default_user_profile_picture.svg',
        errors: [],
        validations: []
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
        case 'SET_VALIDATIONS':
            if (isFieldValid) {
                return {
                    ...state,
                    [fieldName]: {
                        ...state[fieldName],
                        validations: action.payload.validations
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