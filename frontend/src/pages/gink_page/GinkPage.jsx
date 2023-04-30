import React, { useState, useRef } from 'react'
import Header from '../../components/header/Header';
import * as helpers from '../../helpers';
import { data as gink } from './data'
import Button from '../../components/Button';
import icons from '../../components/icons';
import CommentsSection from '../../components/comments_section/CommentsSection';
import Image from '../../components/Image';
import { Link } from 'react-router-dom';
import CommentForm from '../../components/CommentForm';
import ModalWindow from '../../components/ModalWindow';

function GinkPage() {
    const [liked, setLiked] = useState(gink.likedByCurrentUser)
    helpers.setPageTitle(`Gink by ${gink.author.username}`)
    const linkToUserPage = helpers.createLinkTo('/user', gink.author.username)

    const [formForCommentVisible, setFormForCommentVisible] = useState(false)
    const commentsSectionRef = useRef()
    const scrollToComments = () => {
        commentsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const ginkRef = useRef()
    const scrollToStart = () => {
        ginkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const openCommentForm = () => {
        setFormForCommentVisible(true)
    }
    return (
        <>
            <div ref={ginkRef} className='flex flex-col gap-10 justify-center items-center w-full'>
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
                                        <Link to='/user' className='flex'>
                                            <Image src={gink.author.image_url} width={'w-64'} height={'h-64'} />
                                        </Link>
                                        <div className='flex flex-col w-full gap-3'>
                                            <span>{helpers.jsxWithCaption(linkToUserPage, 'wrote')}</span>
                                            <span>{`${gink.created_at}`}</span>
                                            <div className='flex justify-center gap-12'>
                                                <div className='flex justify-center items-center'>
                                                    <Button icon={<>{gink.likesCount}{liked ? icons.liked : icons.unliked}</>} onClick={() => { setLiked(!liked) }} />
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <Button icon={<>{gink.comments?.length} {icons.comments}</>} onClick={scrollToComments} />
                                                </div>
                                                <div className='flex justify-end items-end'>
                                                    <Button icon={icons.pencil} onClick={openCommentForm} />
                                                </div>
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
                <div>
                    <ModalWindow
                        title='Write comment'
                        isOpen={formForCommentVisible}
                        content={(
                            <CommentForm
                                onSubmit={() => {
                                    setFormForCommentVisible(false); gink.comments.push(
                                        {
                                            id: 562,
                                            text: 'akdfmksdf',
                                            author: {
                                                username: 'graveetone'
                                            }
                                        }

                                    )
                                }} />)}
                    />
                </div>
                <div className="flex flex-col justify-center w-full items-center gap-10">
                    {<CommentsSection comments={gink?.comments} />}
                </div>
                <div ref={commentsSectionRef} className='flex justify-end items-end'>
                    <Button icon={icons.arrowUp} onClick={scrollToStart} />
                </div>
            </div>
        </>
    )
}

export default GinkPage;
