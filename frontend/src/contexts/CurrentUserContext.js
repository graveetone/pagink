import React, { createContext, useReducer } from 'react';

export const CurrentUserContext = createContext();

const initialCurrentUserState = {
    id: 1,
    username: 'graveetone',
    email: 'graveetone@pagink.com',
    last_seen: null,
    status: "Online",
    image_url: "https://drive.google.com/u/0/uc?id=1D13oE__ZmhfieSE6SkRInSDJw831y6sz&export=download",
    created_at: "2023-04-07T19:48:09.367Z"
};

const CurrentUserReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value
            }
        case 'RESET':
            return initialCurrentUserState
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
