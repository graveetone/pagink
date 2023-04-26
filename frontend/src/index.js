import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/CurrentUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider>
        <App className='flex flex-col items-center h-screen overflow-y-scroll' />
      </ CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
