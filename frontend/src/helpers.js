import { Link } from "react-router-dom"

const setPageTitle = title => {
    document.title = `PagInk | ${title}`
}

const createLinkTo = (path, caption) => {
    return <Link className='hover:text-ruby-red hover:font-black' to={path}>{caption}</Link>
}

const jsxWithCaption = (jsx, caption) => {
    return <>{jsx} {caption}</>
}

const captionWithJsx = (caption, jsx) => {
    return <>{caption} {jsx}</>
}
const readPhotoFromFile = (file, onLoad, onAbort, onError) => {
    const reader = new FileReader();
    reader.onabort = (error) => { onAbort(error) }
    reader.onerror = (error) => { onError(error) }
    reader.onloadend = () => { onLoad(reader.result) }
    reader.readAsDataURL(file);

}

// validators

// 6+ chars, one letter, one number, one special char required
const passwordTester = password => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password);
}

const emailTester = email => {
    return /^[^\s@,]+@[^\s@,]+\.[^\s@,]+$/.test(email);
}

const getTextPreview = (text) => {
    const textPreviewLength = 30;
    return text.length <= textPreviewLength ? text : `${text.slice(0, textPreviewLength)}...`

}

const joinAuthorNamesAsLinks = authors => {
    return authors.map(author => {
        return <span key={author.id}>{createLinkTo(`/author/${author.id}`, author.name + ' ')}</span>
    })
}

const joinAuthorNames = authors => {
    return authors.map(author => author.name).join(', ')
}

const setTokenInSession = (token) => {
    sessionStorage.setItem('jwt', token)
}

const getTokenFromSession = () => {
    return sessionStorage.getItem('jwt')
}

const areUsersTheSame = (user1, user2) => {
    return user1.id === user2.id
}

const helpers = {
    setPageTitle,
    createLinkTo,
    jsxWithCaption,
    captionWithJsx,
    readPhotoFromFile,
    passwordTester,
    emailTester,
    getTextPreview,
    joinAuthorNamesAsLinks,
    joinAuthorNames,
    setTokenInSession,
    getTokenFromSession,
    areUsersTheSame
}

export default helpers;
