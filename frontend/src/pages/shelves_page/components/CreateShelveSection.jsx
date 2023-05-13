import React, { useState } from 'react'
import ModalWindow from '../../../components/ModalWindow'
import NewShelveForm from '../../../components/NewShelveForm'
import FloatNewShelveButton from './../../../components/FloatNewShelveButton'
import { useCreateShelveMutation } from './../../../api/queries/shelves'

function CreateShelveSection({ author }) {
    const { mutateAsync: createShelve, error } = useCreateShelveMutation(author.id);

    const [formForNewShelveVisible, setFormForNewShelveVisible] = useState(false)

    const closeModal = () => {
        setFormForNewShelveVisible(false)
    }

    const submitCreateShelve = (data) => { // what data is here???
        createShelve(data)
        closeModal()
    }
    return (
        <div>
            < FloatNewShelveButton onClick={() => { setFormForNewShelveVisible(true) }} />

            <ModalWindow
                title={(
                    <p className='flex flex-col gap-3'>
                        <span>
                            Give a name for new shelve
                        </span>
                    </p>
                )}
                isOpen={formForNewShelveVisible}
                onRequestClose={closeModal}
                content={(
                    <NewShelveForm
                        author={author}
                        onSubmit={submitCreateShelve} />)} />
        </div>
    )
}

export default CreateShelveSection;
