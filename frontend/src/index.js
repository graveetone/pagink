import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CurrentUserProvider } from './contexts/CurrentUserContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CurrentUserProvider>
          <App className='flex flex-col items-center h-screen overflow-y-scroll' />
        </ CurrentUserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
