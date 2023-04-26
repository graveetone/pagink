import React, { createContext, useReducer } from 'react';

export const CurrentUserContext = createContext();

const initialCurrentUserState = {
    id: 1,
    username: '',
    email: 'graveetone@pagink.com',
    last_seen: null,
    status: "ACTIVE",
    image_url: "https://lh3.googleusercontent.com/a/AGNmyxbEQfvSPsOPbiim51eu0juOcPUg0bCrHbLkjWE8=s288",
    created_at: "2023-04-07T19:48:09.367Z"
};

const CurrentUserReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value
            }
        default:
            return state;
    }
}

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, dispatchCurrentUser] = useReducer(CurrentUserReducer, initialCurrentUserState);

    return (
        <CurrentUserContext.Provider value={{ currentUser, dispatchCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
};
