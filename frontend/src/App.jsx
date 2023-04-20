import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Menu from './components/menu/Menu'
import { BookPage, AuthorPage, ShelvePage, ShelvesPage, UserPage } from './pages'

function Home() {
  return <h1 className='text-6xl text-center'>Welcome to the Home page!</h1>;
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
        <Menu />

        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/shelves" element={<ShelvesPage />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/authors" element={<AuthorPage />} />
            <Route path="/shelve" element={<ShelvePage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/user" element={<UserPage />} />
          </Routes>
        </Router>
      </div >
    </>
  );
}

export default App;
