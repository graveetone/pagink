import React from 'react'
import icons from './icons';
import Button from './Button';
import { useLikeMutation, useUnlikeMutation } from '../api/queries/likes';

function LikeButton({ caption, isLiked, likeableData, queriesToInvalidate }) {
    const {mutateAsync: like} = useLikeMutation(queriesToInvalidate) 
    const {mutateAsync: unlike} = useUnlikeMutation(queriesToInvalidate)

    return (
        <div className='flex justify-center items-center'>
            <Button icon={(
                <>
                    {caption}
                    {isLiked ? icons.liked : icons.unliked}
                </>
            )} onClick={() => {
                isLiked ? unlike(likeableData) : like(likeableData)
            }} />
        </div>
    )
}

export default LikeButton;
