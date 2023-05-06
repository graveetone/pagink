import { Routes, Route } from 'react-router-dom';
import {
    BookPage,
    AuthorPage,
    ShelvePage,
    ShelvesPage,
    UserPage,
    LoginPage,
    RegistrationPage,
    MainLogoutPage,
    ExplorePage,
    SettingsPage,
    GinkPage,
    ReviewPage,
    HomePage
} from './pages'

import { RegistrationProvider } from './contexts/RegistrationContext'

const LoggedInRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/shelves/:userId" element={<ShelvesPage />} /> 
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/author/:authorId" element={<AuthorPage />} />
                <Route path="/shelve/:shelveId" element={<ShelvePage />} />
                <Route path="/book/:bookId" element={<BookPage />} />
                <Route path="/user/:userId" element={<UserPage />} />
                <Route path="/gink/:ginkId" element={<GinkPage />} />
                <Route path="/review/:reviewId" element={<ReviewPage />} />
                <Route path="*" element={<HomePage />} />
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