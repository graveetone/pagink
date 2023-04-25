import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { setPageTitle } from './../../../helpers'
import subpages from './subpages'

import { RegistrationContext } from './../../../contexts/RegistrationContext'
import RegistrationButton from './components/RegistrationButton'


const components = [
    subpages.StartRegistration,
    subpages.Username,
    subpages.Email,
    subpages.Password,
    subpages.PasswordConfirmation,
    subpages.Photo,
    subpages.FinishRegistration,
    subpages.ConfirmAccount
]


function RegistrationPage() {
    setPageTitle('Sign Up')

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const { registrationState, dispatchRegistrationState } = useContext(RegistrationContext);
    const navigate = useNavigate();

    const startRegistrationOver = () => {
        setCurrentPageIndex(0)
        dispatchRegistrationState({
            type: 'RESET'
        })
    }
    const secondaryButtonWidth = 'xs:w-1/2 md:w-1/6'
    const primaryButtonWidth = 'xs:w-3/4 md:w-1/3'

    const currentComponent = components[currentPageIndex];

    const lastPageIndex = components.length - 1;
    const lastLastPageIndex = components.length - 2;
    const nextPageIndex = currentPageIndex + 1;
    const previousPageIndex = currentPageIndex - 1;
    return (
        <div className='flex flex-col w-full gap-12'>
            <div className='flex flex-col items-center w-full gap-5'>
                {currentComponent}
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center font-mono gap-5 md:gap-12'>

                {currentPageIndex == 0 && (
                    <RegistrationButton
                        caption='Start Registration'
                        width={primaryButtonWidth}
                        onClick={() => { setCurrentPageIndex(nextPageIndex) }} />
                )}
                {currentPageIndex > 0 && currentPageIndex < lastPageIndex && (
                    <RegistrationButton
                        caption='Back'
                        width={secondaryButtonWidth}
                        onClick={() => { setCurrentPageIndex(previousPageIndex) }} />
                )}
                {currentPageIndex > 0 && currentPageIndex < lastLastPageIndex && (
                    <RegistrationButton
                        caption='Next'
                        width={primaryButtonWidth}
                        onClick={() => { setCurrentPageIndex(nextPageIndex) }} />
                )}
                {currentPageIndex == lastLastPageIndex && (
                    <RegistrationButton
                        caption='Finish'
                        width={primaryButtonWidth}
                        onClick={() => { alert(JSON.stringify(registrationState)); setCurrentPageIndex(nextPageIndex) }} />
                )}
                {currentPageIndex == lastLastPageIndex && (
                    <RegistrationButton
                        caption='Start Over'
                        width={secondaryButtonWidth}
                        onClick={startRegistrationOver} />
                )}
                {currentPageIndex == lastPageIndex && (
                    <RegistrationButton
                        caption='Login'
                        width={primaryButtonWidth}
                        onClick={() => { navigate('/login') }} />
                )}
            </div>
        </div>
    )
}

export default RegistrationPage