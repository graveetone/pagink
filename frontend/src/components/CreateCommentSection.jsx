import React, { useState } from 'react'
import { useCreateCommentMutation } from '../api/queries/comments';
import FloatPencilButton from './FloatPencilButton'
import CommentForm from './CommentForm'
import ModalWindow from './ModalWindow'

function CreateCommentSection({ commentable }) {
    const [formForCommentVisible, setFormForCommentVisible] = useState(false)
    const { mutateAsync: createComment } = useCreateCommentMutation(commentable);

    const submitComment = (data) => {
        createComment(data)
        closeModal()
    }

    const closeModal = () => {
        setFormForCommentVisible(false)
    }

    return (
        <div>
            <div className="flex justify-center fixed">
                <div className='flex fixed top-0 right-0 w-1/5'>
                    <FloatPencilButton onClick={() => { setFormForCommentVisible(true) }} />
                </div>
            </div>
            <ModalWindow
                title='Write comment'
                isOpen={formForCommentVisible}
                onRequestClose={closeModal}
                content={(
                    <CommentForm commentData={{ ...commentable }} onSubmit={submitComment} />)}
            />
        </div>
    )
}

export default CreateCommentSection;
