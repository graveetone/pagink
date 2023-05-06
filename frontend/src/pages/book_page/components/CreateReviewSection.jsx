import React, { useState } from 'react'
import ModalWindow from '../../../components/ModalWindow'
import ReviewForm from './../../../components/ReviewForm'
import FloatPencilButton from './../../../components/FloatPencilButton'
import helpers from '../../../helpers'
import { useCreateReviewMutation } from './../../../api/queries/reviews'

function CreateReviewSection({ book }) {
    const { mutateAsync: createReview } = useCreateReviewMutation(book.id);

    const [formForReviewVisible, setFormForReviewVisible] = useState(false)
    const authors = helpers.joinAuthorNames(book.authors);

    const closeModal = () => {
        setFormForReviewVisible(false)
    }

    const submitReview = (data) => {
        createReview(data)
        closeModal()
    }

    return (
        <div>
            <FloatPencilButton onClick={() => { setFormForReviewVisible(true) }} />

            <ModalWindow
                title={(
                    <p className='flex flex-col gap-3'>
                        <span>
                            Write review for
                        </span>
                        <span>
                            {book.title} by {authors}
                        </span>
                    </p>
                )}
                isOpen={formForReviewVisible}
                onRequestClose={closeModal}
                content={(
                    <ReviewForm
                        book={book}
                        onSubmit={submitReview} />)} />
        </div>
    )
}

export default CreateReviewSection;
