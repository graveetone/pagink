import React from 'react'
import icons from '../../../components/icons'
import helpers from '../../../helpers'
import Header from '../../../components/header/Header'

function ShelveHeader({ shelve }) {
    const linkToUserPage = helpers.createLinkTo('/user', shelve.author.username)

    return (
        <Header heading={
            <div className='flex items-center gap-10'>
                {shelve.title}
                <span className='hover:text-ruby-red hover:cursor-pointer'> {shelve.is_private ? icons.lock : icons.globe}</span>

            </div>
        } subheading={
            <div className='text-center m-3'>
                {helpers.jsxWithCaption(linkToUserPage, 'created this shelve 1 month ago')}
            </div>
        }>
        </Header>
    )
}

export default ShelveHeader
