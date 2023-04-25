import React, { createContext, useReducer } from 'react';

export const RegistrationContext = createContext();

const initialRegistrationState = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    photo: ''
};

const registrationReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_USERNAME':
            return { ...state, username: action.payload };
        case 'UPDATE_EMAIL':
            return { ...state, email: action.payload };
        case 'UPDATE_PASSWORD':
            return { ...state, password: action.payload };
        case 'UPDATE_PASSWORDCONFIRMATION':
            return { ...state, passwordConfirmation: action.payload };
        case 'UPDATE_PHOTO':
            return { ...state, photo: action.payload };
        case 'RESET':
            return initialRegistrationState;
        default:
            return state;
    }
};

export const RegistrationProvider = ({ children }) => {
    const [registrationState, dispatchRegistrationState] = useReducer(registrationReducer, initialRegistrationState);

    return (
        <RegistrationContext.Provider value={{ registrationState, dispatchRegistrationState }}>
            {children}
        </RegistrationContext.Provider>
    );
};