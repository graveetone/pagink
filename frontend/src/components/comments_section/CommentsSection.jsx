import React, { useRef } from 'react'
import CommentCard from './CommentCard'

function CommentsSection({ comments }) {
    const commentsRef = useRef({})

    const findCommentById = id => {
        return comments.find(comment => comment.id === id);
    }

    return (
        <div className='flex flex-col justify-center items-center gap-12 m-6'>
            {comments.map(comment => {
                const parent = findCommentById(comment.parentId);
                return <CommentCard key={comment.id}  comment={comment} parent={parent} commentsRef={commentsRef} />
            })}
        </div>
    )
}

export default CommentsSection;
