import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import icons from '../icons'
import Image from '../Image'
import ModalWindow from '../ModalWindow'
import CommentForm from '../CommentForm'
import helpers from './../../helpers'

function CommentCard({ comment, parent, commentsRef }) {
    const [liked, setLiked] = useState(comment.likedByCurrentUser)
    const [formForCommentVisible, setFormForCommentVisible] = useState(false)

    const commentRef = useRef()
    commentsRef.current[comment.id] = commentRef
    const parentRef = parent && commentsRef.current[parent.id];

    const scrollToParent = () => {
        parentRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    const submitComment = () => {
        // send comment here
        closeModal()
    }

    const closeModal = () => {
        setFormForCommentVisible(false)
    }

    return (
        <>
            <div ref={commentRef} className={`shadow-2xl shadow-black flex w-full justify-center items-center border-black text-center rounded-xl`}>
                <div className='flex flex-col w-full items-center'>
                    {parent &&
                        <button onClick={scrollToParent} className='flex p-2 cursor-pointer font-balsamiq justify-center text-md rounded-t-xl border-b-2 border-black w-full'>
                            replied to {parent.author.username}'s: {helpers.getTextPreview(parent.text)}
                        </button>
                    }
                    <div className='flex w-full justify-start'>
                        <div className='flex flex-col border-r-2 border-black p-2 font-balsamiq'>
                            <p>{comment.author.username}</p>
                            <Link to='/user' className='flex'>
                                <Image src={comment.author.image_url} alt={comment.author.username} width={'w-24'} height={'h-24'} />
                            </Link>
                            <p>{comment.created_at}</p>
                        </div>

                        <div className='flex flex-col items-end justify-between w-full gap-3 font-balsamiq p-2'>
                            <div className='flex w-full text-xl p-3 justify-center items-center text-center font-sans'>
                                <p>
                                    {comment.text}
                                </p>
                            </div>
                            <div className='flex justify-end items-end gap-6'>
                                <div className='flex justify-end items-end'>
                                    <Button icon={liked ? icons.liked : icons.unliked} onClick={() => { setLiked(!liked) }} />
                                </div>
                                <div className='flex justify-end items-end'>
                                    <Button icon={icons.pencil} onClick={() => { setFormForCommentVisible(true) }} />
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentCard;
