import React, { useState } from 'react'
import { useCreateGinkMutation } from '../api/queries/ginks';
import FloatPencilButton from './FloatPencilButton'
import GinkForm from './GinkForm'
import ModalWindow from './ModalWindow'

function CreateGinkSection({ currentUser }) {
    const [formForGinkVisible, setFormForGinkVisible] = useState(false)
    const { mutateAsync: createGink } = useCreateGinkMutation(currentUser.id);

    const submitGink = (data) => {
        createGink(data)

        closeModal()
    }

    const closeModal = () => {
        setFormForGinkVisible(false)
    }
    return (
        <div>
            <div className="flex justify-center fixed">
                <div className='flex fixed top-0 right-0 w-1/5'>
                    <FloatPencilButton onClick={() => { setFormForGinkVisible(true) }} />
                </div>
            </div>
            <ModalWindow
                title='Write gink'
                isOpen={formForGinkVisible}
                onRequestClose={closeModal}
                content={(
                    <GinkForm onSubmit={submitGink} />)}
            />
        </div>
    )
}

export default CreateGinkSection;
