import Menu from './components/menu/Menu'
import LoginMenu from './components/menu/LoginMenu'

import { LoggedOutRoutes, LoggedInRoutes } from './routes';


function App() {
  const user = 0;
  return (
    <>
      <div className="mb-24">
        { user ? <LoggedInRoutes /> : <LoggedOutRoutes /> }
      </div >

      <div className='flex w-full justify-center'>
        { user ? <Menu /> : <LoginMenu /> }
      </div>
    </>
  );
}

export default App;
