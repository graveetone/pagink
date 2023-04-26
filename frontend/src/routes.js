import { Routes, Route } from 'react-router-dom';
import { BookPage, AuthorPage, ShelvePage, ShelvesPage, UserPage, LoginPage, RegistrationPage } from './pages'
import Header from './components/header/Header';
import { setPageTitle } from './helpers';
import { RegistrationProvider } from './contexts/RegistrationContext'

// BEGIN temp elements for routes
function Home() {
    setPageTitle('Home')
    return <Header />
}

function MainPage() {
    setPageTitle('Main')
    return <Header subheading={"Your bookshelf, your thoughts, your community"} />
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
// END temp elements for routes

const LoggedInRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/shelves" element={<ShelvesPage />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/author" element={<AuthorPage />} />
                <Route path="/shelve" element={<ShelvePage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    )
}

const LoggedOutRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="/sign_up" element={<RegistrationProvider><RegistrationPage /></RegistrationProvider>} />
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </>
    )
}

export { LoggedInRoutes, LoggedOutRoutes }