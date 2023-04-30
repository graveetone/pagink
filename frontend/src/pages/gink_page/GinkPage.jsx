import React, { useState } from 'react'
import Header from '../../components/header/Header';
import { createLinkTo, setPageTitle, jsxWithCaption } from '../../helpers';
import { data as gink } from './data'
import Button from '../../components/Button';
import icons from '../../components/icons';
import CommentsSection from '../../components/comments_section/CommentsSection';
import { data as comments } from './data'
import Image from '../../components/Image';

function GinkPage() {
    const [commentsVisible, setCommentsVisible] = useState(false)
    const [liked, setLiked] = useState(gink.likedByCurrentUser)
    setPageTitle(`Gink by ${gink.author.username}`)
    const linkToUserPage = createLinkTo('/user', gink.author.username)

    return (
        <>
            <div className='flex flex-col gap-10 justify-center items-center w-full'>
                <div className='flex justify-center items-center w-full p-4'>
                    <Header heading={(
                        <span className='cursor-pointer'>
                            {gink.title}
                        </span>
                    )}
                        subheading={
                            <div className='flex flex-col md:flex-row items-center md:items-start justify-around xs:gap-12 md:gap-0'>
                                <div>
                                    <div className='flex flex-col justify-around items-center'>
                                        <div className='flex'>
                                            <Image src={gink.author.image_url} width={'w-64'} height={'h-64'} />
                                        </div>
                                        <div className='flex flex-col w-full gap-3'>
                                            <span>{jsxWithCaption(linkToUserPage, 'wrote')}</span>
                                            <span>{`${gink.created_at}`}</span>
                                            <div className='flex justify-center gap-12'>
                                                <div className='flex justify-center items-center'>
                                                    <Button icon={<>{gink.likesCount}{liked ? icons.liked : icons.unliked}</>} onClick={() => { setLiked(!liked) }} />
                                                </div>
                                                <Button icon={<>{gink.comments?.length} {icons.comments}</>} onClick={() => { setCommentsVisible(!commentsVisible) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col md:w-3/5 font-roboto xs:text-2xl sm:text-3xl text-gray-900 text-center leading-relaxed tracking-wider'>
                                    <p>
                                        {gink.text}
                                    </p>
                                </div>
                            </div>
                        } />
                </div>
                {/* <div className="flex flex-col justify-center w-full items-center gap-10">
                    {commentsVisible && <CommentsSection />}
                </div> */}
            </div>
        </>
    )
}

export default GinkPage;
