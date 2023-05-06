import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import helpers from '../../helpers'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Confirm from '../../components/Confirm';
import { useLogoutMutation } from "./../../api/queries/auth"
import Heading from '../../components/Heading'
import Subheading from '../../components/Subheading'
const logoutButtonStyles = 'flex w-full justify-center text-center bg-ruby-red text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-ruby-red transition-all duration-700 ease-out font-mono'
const editProfileButtonStyles = 'flex w-full justify-center text-center bg-black text-white rounded-3xl p-3 font-xs shadow-lg shadow-gray-600 focus:outline-none focus:shadow-black hover:cursor-pointer hover:bg-white hover:text-black border-4 border-black transition-all duration-700 ease-out font-mono'

function SettingsPage() {
    const { mutateAsync: logout, data, isLoading, isError, isSuccess } = useLogoutMutation();

    const navigate = useNavigate()
    helpers.setPageTitle('Settings')
    const { dispatchCurrentUser } = useContext(CurrentUserContext);

    const logoutUser = () => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <Confirm
                    onYes={() => {
                        logout()
                        dispatchCurrentUser({
                            type: 'RESET'
                        });
                        helpers.setTokenInSession('')
                        navigate('/login')
                        window.location.reload()
                    }}
                    onNo={onClose}
                    onClose={onClose}
                />
            )
        });
    };

    return (
        <>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <Heading>Settings</Heading>
                <Subheading>
                    Setup PagInk just for you
                </Subheading>
                <div className="flex flex-col justify-center  w-3/4 md:w-1/2 items-center gap-10">

                    <div className={`flex items-center justify-center w-full`}>
                        <button className={editProfileButtonStyles}>Edit profile</button>
                    </div >
                    <div className={`flex items-center justify-center w-full`}>
                        <button className={logoutButtonStyles} onClick={logoutUser}>Logout</button>
                    </div >
                </div>
            </div>
        </>
    )
}

export default SettingsPage;
