import Menu from './components/menu/Menu'
import LoginMenu from './components/menu/LoginMenu'
import { CurrentUserContext } from './contexts/CurrentUserContext'
import { LoggedOutRoutes, LoggedInRoutes } from './routes';
import { useContext } from 'react';
import { useCurrentUserQuery } from './api/queries/users'
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const { currentUser, dispatchCurrentUser } = useContext(CurrentUserContext);

  const { data } = useCurrentUserQuery()


  if (data) {
    dispatchCurrentUser({
      type: 'UPDATE_CURRENT_USER',
      payload: data.user
    })
  }
  const userLoggedIn = currentUser.username;

  return (
    <>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="mb-24">
        {userLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
      </div >

      <div className='flex w-full justify-center'>
        {userLoggedIn ? <Menu /> : <LoginMenu />}
      </div>
    </>
  );
}

export default App;
