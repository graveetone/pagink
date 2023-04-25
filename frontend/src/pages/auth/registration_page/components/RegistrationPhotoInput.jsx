import React, { useContext, useCallback } from 'react'
import { useDropzone } from "react-dropzone";
import { readPhotoFromFile } from './../../../../helpers'
import { RegistrationContext } from '../../../../contexts/RegistrationContext';

function RegistrationPhotoInput({ description }) {
    const { registrationState, dispatchRegistrationState } = useContext(RegistrationContext);
    const handlePhotoUploaded = useCallback(acceptedFiles => {
        const selectedImage = acceptedFiles[0];
        readPhotoFromFile(selectedImage, (result) => {
            dispatchRegistrationState({
                type: 'UPDATE_PHOTO',
                payload: result
            },
                (error) => {
                    alert('Try again')
                },
                (error) => {
                    alert('Try again')
                })
        })
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handlePhotoUploaded,
        accept: 'image/*',
        multiple: false
    });

    return (
        <div className='flex items-center w-full gap-5 flex-col'>
            <div className='flex flex-col justify-center items-center w-3/4 font-sans text-xl text-center font-roboto gap-2'>
                {description}
            </div>

            <div className='flex flex-col justify-center items-center w-3/4 text-center' {...getRootProps()}>
                <input name='photo' className="dropzone-input" {...getInputProps()} />
                <div className='flex flex-col justify-center items-center md:w-1/2 gap-5 border-2 border-dashed border-ruby-red p-4 font-roboto'>
                    {isDragActive ? 'Release to drop your photo here' : 'Drop your photo here or click to select from files'}
                    {registrationState.photo && (
                        <div className="flex items-center justify-center">
                            <img src={registrationState.photo} alt='' className="rounded-3xl w-[250px] h-[250px] object-cover object-center" />
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default RegistrationPhotoInput