import React, { useContext } from 'react'
import Subheading from '../../../../components/Subheading';
import { RegistrationContext } from '../../../../contexts/RegistrationContext';

function ConfirmAccount() {
    const { registrationState } = useContext(RegistrationContext);

    return (
        <div className='flex flex-col justify-center items-center text-center w-full'>
            <Subheading>
                Thank you for joining us
            </Subheading>
            <div className='flex justify-center items-center text-xl md:text-2xl font-roboto break-words p-3 w-3/4'>
                <p>
                    <b>{registrationState.username.value}</b>, please check your email <b>{registrationState.email.value}</b> to confirm your account
                </p>
            </div>
        </div>
    )
}

export default ConfirmAccount;
