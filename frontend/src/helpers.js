import { NavLink } from "react-router-dom"

const setPageTitle = title => {
    document.title = `PagInk | ${title}`
}

const createLinkTo = (path, caption) => {
    return <NavLink className='hover:text-ruby-red' to={path}>{caption}</NavLink>
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
export { setPageTitle, createLinkTo, jsxWithCaption, captionWithJsx, readPhotoFromFile, passwordTester, emailTester }
