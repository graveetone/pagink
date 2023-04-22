import Menu from './components/menu/Menu'
import LoginMenu from './components/menu/LoginMenu'

import { LoggedOutRoutes, LoggedInRoutes } from './routes';


function App() {
  const user = 1;
  return (
    <>
      <div className="flex flex-col items-center h-screen overflow-y-scroll pb-24">
        { user ? <LoggedInRoutes /> : <LoggedOutRoutes /> }
      </div >

      <div className='flex w-full justify-center'>
        { user ? <Menu /> : <LoginMenu /> }
      </div>
    </>
  );
}

export default App;
