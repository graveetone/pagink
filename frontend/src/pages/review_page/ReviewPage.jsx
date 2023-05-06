import BookImage from '../../components/BookImage';
import React, { useState, useRef, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';

import helpers from '../../helpers';
import Button from '../../components/Button';
import icons from '../../components/icons';
import CommentsSection from '../../components/comments_section/CommentsSection';
import Image from '../../components/Image';
import CommentForm from '../../components/CommentForm';
import ModalWindow from '../../components/ModalWindow';
import Heading from './../../components/Heading'
import LoadableContent from './../../components/LoadableContent'
import { useReviewQuery, useReviewCommentsQuery } from './../../api/queries/reviews'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function ReviewPage() {
    const reviewId = parseInt(useParams().reviewId);


    const reviewRef = useRef()
    const commentsSectionRef = useRef()

    const [liked, setLiked] = useState(false)
    const [formForCommentVisible, setFormForCommentVisible] = useState(false)

    const scrollToStart = () => {
        reviewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const scrollToComments = () => {
        commentsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const openCommentForm = () => {
        setFormForCommentVisible(true)
    }

    const submitComment = () => {
        // send comment here
        closeModal()
    }

    const closeModal = () => {
        setFormForCommentVisible(false)
    }

    const { currentUser } = useContext(CurrentUserContext);

    return (
        <>
            <LoadableContent hook={useReviewQuery} params={reviewId}>
                {(review) => {
                    {
                        { helpers.setPageTitle(`Review by ${review.author.username}`) }
                        setLiked(review.likedBy.includes(currentUser.id))
                    }
                    return <div ref={reviewRef} className='flex flex-col gap-12 justify-center items-around w-full'>
                        <Heading>
                            <span>
                                Review for {review.book.title}
                            </span>
                        </Heading>
                        <div className='flex flex-col items-center justify-around gap-12 w-full'>
                            <div className='flex flex-col w-full justify-evenly items-around md:gap-6'>
                                <div className='flex flex-col md:flex-row justify-center items-evenly w-full font-balsamiq'>
                                    <div className='flex flex-col w-full justify-between p-10'>
                                        <Link to={`/user/${review.author.id}`} className='w-full h-full'>
                                            <Image src={review.author.image_url} alt={review.author.username} width={'w-56 sm:w-80'} height={'h-56 sm:h-80'} />
                                        </Link>
                                        <div className='flex flex-col w-full gap-3 text-center justify-end'>
                                            <span className='text-3xl'>{helpers.jsxWithCaption(helpers.createLinkTo(`/user/${review.author.id}`, review.author.username), 'wrote')}</span>
                                            <span className='text-xl'>{`${review.timestamp}`}</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col w-full justify-between p-10'>
                                        <Link to={`/book/${review.book.id}`} className='w-full h-full'>
                                            <BookImage src={review.book.image_url} alt={review.book.title} width={'w-72'} height={'h-96'} />
                                        </Link>
                                        <div className='flex flex-col w-full gap-3 text-center justify-end'>
                                            <span className='text-3xl'>{review.book.title}</span>
                                            <span className='text-xl '>{helpers.joinAuthorNamesAsLinks(review.book.authors)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row justify-around items-center'>
                                    <div>
                                        <Button icon={<>{review.likesCount}{liked ? icons.liked : icons.unliked}</>} onClick={() => { setLiked(!liked); }} />
                                    </div>
                                    <div>
                                        <Button icon={<>{review.commentsCount} {icons.comments}</>} onClick={scrollToComments} />
                                    </div>
                                    <div>
                                        <Button icon={icons.pencil} onClick={openCommentForm} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full px-6'>
                                <p className='font-roboto xs:text-2xl sm:text-3xl text-gray-900 text-center leading-relaxed tracking-wider'>
                                    {review.text}
                                </p>
                            </div>
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

                        <LoadableContent hook={useReviewCommentsQuery} params={review.id}>
                            {CommentsSections}
                        </LoadableContent>

                        <div ref={commentsSectionRef} className='flex justify-center items-center'>
                            <Button icon={icons.arrowUp} onClick={scrollToStart} />
                        </div>
                    </div >
                }}
            </LoadableContent>

        </>
    )
}

export default ReviewPage;

const CommentsSections = ({ comments }) => {
    return <div className="flex flex-col justify-center w-full items-center gap-10">
        {<CommentsSection comments={comments} />}
    </div>
}
