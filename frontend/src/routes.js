import { Routes, Route } from 'react-router-dom';
import { BookPage, AuthorPage, ShelvePage, ShelvesPage, UserPage, LoginPage, RegistrationPage, MainLogoutPage, ExplorePage, SettingsPage, GinkPage } from './pages'
import Header from './components/header/Header';
import { setPageTitle } from './helpers';
import { RegistrationProvider } from './contexts/RegistrationContext'

// BEGIN temp elements for routes
function Home() {
    setPageTitle('Home')
    return <Header />
}
// END temp elements for routes

const LoggedInRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/shelves" element={<ShelvesPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                {/* <Route path="/logout" element={<Logout />} /> */}
                <Route path="/author" element={<AuthorPage />} />
                <Route path="/shelve" element={<ShelvePage />} />
                <Route path="/book" element={<BookPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/gink" element={<GinkPage />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    )
}

const LoggedOutRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<MainLogoutPage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route path="/sign_up" element={<RegistrationProvider><RegistrationPage /></RegistrationProvider>} />
                <Route path="*" element={<LoginPage />} />
            </Routes>
        </>
    )
}

export { LoggedInRoutes, LoggedOutRoutes }