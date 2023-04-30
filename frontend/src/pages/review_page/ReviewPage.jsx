import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import helpers from '../../helpers';
import { data as review } from './data'
import Button from '../../components/Button';
import icons from '../../components/icons';
import CommentsSection from '../../components/comments_section/CommentsSection';
import BookImage from '../../components/BookImage';
import Image from '../../components/Image';
import CommentForm from '../../components/CommentForm';
import ModalWindow from '../../components/ModalWindow';

function ReviewPage() {
    const [liked, setLiked] = useState(review.likedByCurrentUser)
    const authors = helpers.joinAuthorNames(review.book.authors)
    const authorsLinks = helpers.joinAuthorNamesAsLinks(review.book.authors)
    helpers.setPageTitle(`Review by ${review.author.username} for ${review.book.title} by ${authors}`)
    const linkToUserPage = helpers.createLinkTo('/user', review.author.username)

    const [formForCommentVisible, setFormForCommentVisible] = useState(false)
    const commentsSectionRef = useRef()
    const scrollToComments = () => {
        commentsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const reviewRef = useRef()
    const scrollToStart = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const openCommentForm = () => {
        setFormForCommentVisible(true)
    }

    const submitComment = () => {
        // send gink here
        closeModal()
    }

    const closeModal = () => {
        setFormForCommentVisible(false)
    }
    return (
        <>
            <div ref={reviewRef} className='flex flex-col gap-10 justify-center items-center w-full'>
                <div className='flex justify-center items-center w-full p-4'>
                    <Header heading={(
                        <span>
                            Review for {review.book.title}
                        </span>
                    )}
                        subheading={
                            <div className='flex flex-col md:flex-row items-center md:items-start justify-around xs:gap-12 md:gap-0'>
                                <div className='flex flex-col gap-12'>
                                    <div className='flex flex-col justify-around items-center'>
                                        <Link to='/user' className='flex'>
                                            <Image src={review.author.image_url} alt={review.author.username} width={'w-64'} height={'h-64'} />
                                        </Link>
                                        <div className='flex flex-col w-full gap-3'>
                                            <span>{helpers.jsxWithCaption(linkToUserPage, 'wrote')}</span>
                                            <span>{`${review.created_at}`}</span>
                                            <div className='flex justify-center gap-12'>
                                                <div className='flex justify-center items-center'>
                                                    <Button icon={<>{review.likesCount}{liked ? icons.liked : icons.unliked}</>} onClick={() => { setLiked(!liked) }} />
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <Button icon={<>{review.comments?.length} {icons.comments}</>} onClick={scrollToComments} />
                                                </div>
                                                <div className='flex justify-end items-end'>
                                                    <Button icon={icons.pencil} onClick={openCommentForm} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-around items-center'>
                                        <Link to='/book' className='flex'>
                                            <BookImage src={review.book.image_url} alt={review.book.title} width={'w-64'} height={'h-96'} />
                                        </Link>
                                        <div className='flex flex-col w-full gap-3'>
                                            <span className='text-center'>{review.book.title}</span>
                                            <span className='text-center'>{authorsLinks}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col md:w-3/5 font-roboto xs:text-2xl sm:text-3xl text-gray-900 text-center leading-relaxed tracking-wider'>
                                    <p>
                                        {review.text}
                                    </p>
                                </div>
                            </div>
                        } />
                </div>
                <div>
                    <ModalWindow
                        title='Write comment'
                        isOpen={formForCommentVisible}
                        onRequestClose={closeModal}
                        content={(
                            <CommentForm
                                onSubmit={submitComment} />)}
                    />
                </div>
                <div className="flex flex-col justify-center w-full items-center gap-10">
                    {<CommentsSection comments={review?.comments} />}
                </div>
                <div ref={commentsSectionRef} className='flex justify-end items-end'>
                    <Button icon={icons.arrowUp} onClick={scrollToStart} />
                </div>
            </div>
        </>
    )
}

export default ReviewPage;
