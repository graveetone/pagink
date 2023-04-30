import { Link } from "react-router-dom"

const setPageTitle = title => {
    document.title = `PagInk | ${title}`
}

const createLinkTo = (path, caption) => {
    return <Link className='hover:text-ruby-red' to={path}>{caption}</Link>
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
        return <span key={author.id}>{createLinkTo('/author', author.name + ' ')}</span>
    })
}

const joinAuthorNames = authors => {
    return authors.map(author => author.name).join(', ')
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
    joinAuthorNames
}

export default helpers;

