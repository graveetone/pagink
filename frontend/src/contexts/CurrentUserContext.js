import React, { createContext, useReducer, useEffect, useState } from 'react';

export const CurrentUserContext = createContext();

const initialCurrentUserState = {};

const CurrentUserReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value
      };
    case 'UPDATE_CURRENT_USER':
      return action.payload;
    case 'RESET':
      return initialCurrentUserState;
    default:
      return state;
  }
};

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, dispatchCurrentUser] = useReducer(CurrentUserReducer, initialCurrentUserState);

  return (
    <CurrentUserContext.Provider value={{ currentUser, dispatchCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
