import React from 'react'
import icons from '../../../components/icons'
import helpers from '../../../helpers'
import Heading from '../../../components/Heading'
import Subheading from '../../../components/Subheading'

function ShelveHeader({ shelve }) {
    const linkToUserPage = helpers.createLinkTo(`/user/${shelve.author.id}`, shelve.author.username)

    return (
        <>
            <Heading>
                <div className='flex items-center gap-10'>
                    {shelve.title}
                    <span className='hover:text-ruby-red hover:cursor-pointer'> {shelve.is_private ? icons.lock : icons.globe}</span>
                </div>
            </Heading>
            <Subheading>
                <div className='text-center m-3'>
                    {helpers.jsxWithCaption(linkToUserPage, `created this shelve ${shelve.timestamp}`)}
                </div>
            </Subheading>
        </>
    )
}

export default ShelveHeader
