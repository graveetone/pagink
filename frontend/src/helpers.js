import { NavLink } from "react-router-dom"

const setPageTitle = title => {
    document.title = `PagInk | ${title}`
}

const createLinkTo = (path, caption) => {
    return <NavLink className='hover:text-ruby-red' to={path}>{caption}</NavLink>
}

const JsxWithCaption = (jsx, caption) => {
    return <>{jsx} {caption}</>
}

const CaptionWithJsx = (caption, jsx) => {
    return <>{caption} {jsx}</>
}
export { setPageTitle, createLinkTo, JsxWithCaption, CaptionWithJsx }