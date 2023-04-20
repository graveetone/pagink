import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Menu from './components/menu/Menu'
import LoginMenu from './components/menu/LoginMenu'
import Header from './components/Header';
import { BookPage, AuthorPage, ShelvePage, ShelvesPage, UserPage, LoginPage } from './pages'

function Home() {
  return <Header />
}

function MainPage() {
  return <Header />
}

function SignUpPage() {
  return <Header subheading={'We are glad you are joining PagInk, Reader'}/>
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
  const user = 0;
  return (
    <>
      <div className="flex flex-col items-center h-screen overflow-y-scroll pb-24">
        {user ? (
          <>
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
          </>
        ) : (
          <>
            <Router>
              <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="/sign_up" element={<SignUpPage />} />
              </Routes>
            </Router>
          </>
        )}
      </div >
      <div className='flex w-full justify-center'>
        {user ? <Menu /> : <LoginMenu />}
      </div>
    </>
  );
}

export default App;
