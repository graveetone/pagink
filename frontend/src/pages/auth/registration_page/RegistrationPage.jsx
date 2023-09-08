import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import helpers from './../../../helpers'
import subpages from './subpages'
import { RegistrationContext } from './../../../contexts/RegistrationContext'
import RegistrationButton from './components/RegistrationButton'
import Popup from './../../../components/popup/Popup'
import Heading from '../../../components/Heading'
import { useRegistrationMutation } from '../../../api/queries/auth'

const components = [
    subpages.startRegistration,
    subpages.username,
    subpages.email,
    subpages.password,
    subpages.passwordConfirmation,
    subpages.photo,
    subpages.finishRegistration,
    subpages.confirmAccount
]


function RegistrationPage() {
    helpers.setPageTitle('Sign Up')

    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [errorsBlock, setErrorsBlock] = useState(<Popup errors={[]} visible={false} />);
    const { registrationState, dispatchRegistrationState } = useContext(RegistrationContext);
    const navigate = useNavigate();

    const currentComponent = components[currentPageIndex];
    const currentInputName = currentComponent?.inputName;

    const { mutateAsync: register } = useRegistrationMutation();

    const resetErrors = () => setErrorsBlock(<Popup errors={[]} visible={false} />);

    const startRegistrationOver = () => {
        setCurrentPageIndex(0)
        dispatchRegistrationState({
            type: 'RESET'
        })
    }

    const validateCurrentField = () => {
        if (currentInputName) {
            const field = registrationState[currentInputName];

            const errorMessages = field.validations.filter(validation => {
                return !validation.rule(field.value)
            }).map(validation => {
                return validation.message
            })

            dispatchRegistrationState({
                type: 'ADD_ERRORS',
                payload: {
                    fieldName: currentInputName,
                    errors: errorMessages
                }
            });

            return errorMessages;
        }
    }

    const handleNextButtonClick = () => {
        const errorMessages = validateCurrentField();
        if (currentInputName) {
            if (errorMessages.length === 0) {
                setCurrentPageIndex(nextPageIndex)
                resetErrors()
            }
            else {
                setErrorsBlock(
                    <Popup errors={errorMessages} visible={true} />
                )
                dispatchRegistrationState({
                    type: 'RESET_ERRORS',
                    payload: {
                        fieldName: currentInputName,
                    }
                })
            }
        }
        else {
            setCurrentPageIndex(nextPageIndex)
        }
    }

    const handleBackButtonClick = () => {
        setCurrentPageIndex(previousPageIndex);
        resetErrors()
    }

    const handleSubmitRegistration = async () => {
        const {
            username: { value: username },
            email: { value: email },
            password: { value: password },
            passwordConfirmation: { value: password_confirmation },
            photo: { value: url }
        } = registrationState;

        const data = {
            username,
            email,
            password: password,
            password_confirmation,
            url: url
        };

        try {
            const response = await register({ user: data });
            setCurrentPageIndex(nextPageIndex)
        } catch (error) {
            console.log(error); //TODO: display error for user
        }
    }

    const secondaryButtonWidth = 'xs:w-1/2 md:w-1/6'
    const primaryButtonWidth = 'xs:w-3/4 md:w-1/3'


    const lastPageIndex = components.length - 1;
    const lastLastPageIndex = components.length - 2;
    const nextPageIndex = currentPageIndex + 1;
    const previousPageIndex = currentPageIndex - 1;
    return (
        <div className='flex flex-col w-full gap-12'>
            <div className='flex flex-col items-center w-full gap-5'>
                <Heading />
                {currentComponent.subpage}
                {errorsBlock}
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center font-mono gap-5 md:gap-12'>

                {currentPageIndex === 0 && (
                    <RegistrationButton
                        caption='Start Registration'
                        width={primaryButtonWidth}
                        onClick={() => { setCurrentPageIndex(nextPageIndex) }} />
                )}
                {currentPageIndex > 0 && currentPageIndex < lastPageIndex && (
                    <RegistrationButton
                        caption='Back'
                        width={secondaryButtonWidth}
                        onClick={handleBackButtonClick} />
                )}
                {currentPageIndex > 0 && currentPageIndex < lastLastPageIndex && (
                    <RegistrationButton
                        caption='Next'
                        width={primaryButtonWidth}
                        onClick={handleNextButtonClick} />
                )}
                {currentPageIndex === lastLastPageIndex && (
                    <RegistrationButton
                        caption='Finish'
                        width={primaryButtonWidth}
                        onClick={() => { handleSubmitRegistration }} />
                )}
                {currentPageIndex === lastLastPageIndex && (
                    <RegistrationButton
                        caption='Start Over'
                        width={secondaryButtonWidth}
                        onClick={startRegistrationOver} />
                )}
                {currentPageIndex === lastPageIndex && (
                    <RegistrationButton
                        caption='Login'
                        width={primaryButtonWidth}
                        onClick={() => { navigate('/login') }} />
                )}
            </div>
        </div>
    )
}

export default RegistrationPage;
