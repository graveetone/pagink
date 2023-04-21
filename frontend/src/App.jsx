import {
  Routes,
  Route
} from 'react-router-dom';

import Menu from './components/menu/Menu'
import LoginMenu from './components/menu/LoginMenu'
import Header from './components/Header/Header';
import { setPageTitle } from './helpers';
import { BookPage, AuthorPage, ShelvePage, ShelvesPage, UserPage, LoginPage } from './pages'

function Home() {
  setPageTitle('Home')
  return <Header />
}

function MainPage() {
  setPageTitle('Main')
  return <Header subheading={"Your bookshelf, your thoughts, your community"} />
}

function SignUpPage() {
  setPageTitle('Sign Up')
  return <Header subheading={"We're glad you're joining PagInk"} />
}

function Explore() {
  setPageTitle('Explore')
  return <Header heading='Explore' subheading={"Find new books"} />

}
function Settings() {
  setPageTitle('Settings')
  return (
    <>
      <Header heading='Settings' subheading={"Setup PagInk just for you"} />
      <a href="/logout">Logout</a>
    </>
  )
}
function Logout() {
  return <h1 className='text-6xl text-center'>Logout</h1>;
}


function App() {
  const user = 1;
  return (
    <>
      <div className="flex flex-col items-center h-screen overflow-y-scroll pb-24">
        {user ? (
          <>
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
          </>
        ) : (
          <>
              <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="/sign_up" element={<SignUpPage />} />
                <Route path="*" element={<LoginPage />} />
              </Routes>
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
