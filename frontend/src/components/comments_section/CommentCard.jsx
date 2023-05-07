import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import icons from '../icons'
import Image from '../Image'
import ModalWindow from '../ModalWindow'
import CommentForm from '../CommentForm'
import helpers from './../../helpers'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function CommentCard({ comment, parent, commentsRef }) {
    const [liked, setLiked] = useState(false)
    const [formForCommentVisible, setFormForCommentVisible] = useState(false)

    const { currentUser } = useContext(CurrentUserContext);

    const commentRef = useRef();
    commentsRef.current[comment.id] = commentRef;
    const author = comment.author;
    const linkToAuthor = `/user/${author.id}`

    const origin = comment.origin;
    const originRef = origin && commentsRef.current[origin.id];


    const submitComment = (commentInfo) => {
        // send comment here
        alert(JSON.stringify(commentInfo))
        closeModal()
    }

    const closeModal = () => {
        setFormForCommentVisible(false)
    }


    const scrollToOrigin = () => {
        originRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return (
        <>
            <div ref={commentRef} className='flex p-3 gap-3 flex-col justify-center items-center shadow-2xl shadow-black w-full border-black text-center rounded-xl'>
                <div className='flex w-full gap-3'>
                    <div className='flex'>
                        <Link to={linkToAuthor}>
                            <Image src={author.image_url} alt={author.username} width={'w-24'} height={'h-24'} />
                        </Link>
                    </div>
                    <div className='flex flex-col text-2xl flex-1'>
                        <Link to={linkToAuthor} className='flex w-full p-1'>
                            {author.username}
                        </Link>
                        {origin && <div className='flex flex-col items-start gap-3 w-full border-l-4 border-ruby-red p-3 cursor-pointer' onClick={() => scrollToOrigin()}>
                            <div>
                                {icons.replyArrow}
                            </div>
                            <div className='text-start'>
                                <p className='flex text-lg'>
                                    {origin.authorUsername}
                                </p>
                                <p className='text-sm'>
                                    {helpers.getTextPreview(origin.text)}
                                </p>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className='flex justify-center items-center p-3 w-full'>
                    <p className='text-center text-xl font-roboto'>
                        {comment.text}
                    </p>
                </div>
                <div className='flex justify-between items-center w-full font-balsamiq'>
                    <div className='flex justify-center items-center gap-3 text-center text-sm'>
                        <p>
                            {icons.clock}
                        </p>
                        <p>
                            {comment.timestamp}
                        </p>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex justify-center items-center'>
                            <Button icon={<>{comment.likedBy.length}{true ? icons.liked : icons.unliked}</>} onClick={() => { }} />
                        </div>
                        <div className='flex justify-center items-center'>
                            <Button icon={<>{comment.commentsCount} {icons.comments}</>} onClick={() => { }} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ModalWindow
                    title='Write comment'
                    isOpen={formForCommentVisible}
                    onRequestClose={closeModal}
                    content={(
                        <CommentForm
                            parent={comment}
                            onSubmit={submitComment} />)}
                />
            </div>
        </>
    )
}

export default CommentCard;
