import React, { useState, useContext } from 'react'
import ModalWindow from '../../../components/ModalWindow'
import AddBookToShelveForm from '../../../components/AddBookToShelveForm'
import AddBookToShelveButton from './../../../components/AddBookToShelveButton'
import { useAddBookToShelveMutation } from './../../../api/queries/shelves'
import LoadableContent from './../../../components/LoadableContent'
import { useShelvesQuery } from '../../../api/queries/shelves'
import { CurrentUserContext } from './../../../contexts/CurrentUserContext'
import { useNavigate } from 'react-router-dom'

function AddBookToShelveSection({ book }) {
    const navigate = useNavigate()

    const { mutateAsync: addBookToShelve } = useAddBookToShelveMutation(
        book.id,
        {
            onSuccess: ({ data: shelve }) => {
                navigate(`/shelve/${shelve.id}`);
            }
        })

    const { currentUser } = useContext(CurrentUserContext);
    const [formVisible, setFormVisible] = useState(false)

    const closeModal = () => {
        setFormVisible(false)
    }

    const submitAddBookToShelve = (data) => {
        addBookToShelve(data)
        closeModal()
    }
    return (
        <div>
            < AddBookToShelveButton onClick={() => { setFormVisible(true) }} />

            <ModalWindow
                title={(
                    <p className='flex flex-col gap-3'>
                        <span>
                            Choose shelve
                        </span>
                    </p>
                )}
                isOpen={formVisible}
                onRequestClose={closeModal}
                content={(
                    <LoadableContent hook={useShelvesQuery} params={currentUser.id} subLoader={true}>
                        {({ shelves }) => {
                            return <AddBookToShelveForm
                                shelves={shelves}
                                book={book}
                                onSubmit={submitAddBookToShelve} />
                        }}
                    </LoadableContent>
                )} />
        </div>
    )
}

export default AddBookToShelveSection;
