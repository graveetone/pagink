import Menu from './components/menu/Menu'
import LoginMenu from './components/menu/LoginMenu'
import { CurrentUserContext, CurrentUserProvider } from './contexts/CurrentUserContext'

import { LoggedOutRoutes, LoggedInRoutes } from './routes';
import { useContext } from 'react';


function App() {
  const { currentUser } = useContext(CurrentUserContext);
  const user = currentUser.username;
  return (
    <>
      <div className="mb-24">
        {user ? <LoggedInRoutes /> : <LoggedOutRoutes />}
      </div >

      <div className='flex w-full justify-center'>
        {user ? <Menu /> : <LoginMenu />}
      </div>
    </>
  );
}

export default App;
