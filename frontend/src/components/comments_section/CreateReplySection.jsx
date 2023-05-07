import React, { useState } from 'react'
import { useCreateCommentMutation } from '../../api/queries/comments'
import CommentForm from '../CommentForm'
import ModalWindow from '../ModalWindow'
import Button from '../Button'
import icons from '../icons'

function CreateReplySection({ origin }) {
    const [formForReplyVisible, setFormForReplyVisible] = useState(false)
    const { mutateAsync: createComment } = useCreateCommentMutation(origin.commentable);

    const submitComment = (data) => {
        createComment(data)
        alert(JSON.stringify(data))

        closeModal()
    }

    const closeModal = () => {
        setFormForReplyVisible(false)
    }

    return (
        <div>
            <div className='flex justify-center items-center'>
                <Button icon={<>{origin.repliesCount} {icons.replyArrow}</>} onClick={() => { setFormForReplyVisible(true) }} />
            </div>
            <div className="flex justify-center fixed">
            </div>
            <ModalWindow
                title='Reply to'
                isOpen={formForReplyVisible}
                onRequestClose={closeModal}
                content={(
                    <CommentForm
                        commentData={{ ...origin.commentable, origin: origin }}
                        onSubmit={submitComment}
                    />)}
            />
        </div>
    )
}

export default CreateReplySection;
