import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Menu from './components/menu/Menu'
import {Book} from './pages'

function Home() {
  return <h1 className='text-6xl text-center'>Welcome to the Home page!</h1>;
}

function Books() {
  return <h1 className='text-6xl text-center'>Books</h1>;
}

function Explore() {
  return <h1 className='text-6xl text-center'>Explore</h1>;
}
function Settings() {
  return <h1 className='text-6xl text-center'>Settings</h1>;
}
function Logout() {
  return <h1 className='text-6xl text-center'>Logout</h1>;
}


function App() {

  return (
    <>
      <div className="flex flex-col items-center pb-12 mb-12">
        {/* <h1 className='text-6xl text-center'>PAgInk is UndeR conTRuCtiOn</h1> */}
        <Menu />
        {/* <div className='h-2/3'></div> */}

        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/books" element={<Book />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </Router>
      </div >
    </>
  );
}

export default App;
