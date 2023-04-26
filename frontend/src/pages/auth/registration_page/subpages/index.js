import Username from './Username'
import Password from './Password'
import Email from './Email'
import FinishRegistration from './FinishRegistration'
import StartRegistration from './StartRegistration'
import PasswordConfirmation from './PasswordConfirmation'
import ConfirmAccount from './ConfirmAccount'
import Photo from './Photo'

const subpages = {
    startRegistration: {
        subpage: <StartRegistration />
    },
    username: {
        subpage: <Username />,
        inputName: "username"
    },
    email: {
        subpage: <Email />,
        inputName: "email"
    },
    password: {
        subpage: <Password />,
        inputName: "password"
    },
    passwordConfirmation: {
        subpage: <PasswordConfirmation />,
        inputName: "passwordConfirmation"
    },
    photo: {
        subpage: <Photo />
    },
    finishRegistration: {
        subpage: <FinishRegistration />
    },
    confirmAccount: {
        subpage: <ConfirmAccount />
    }
}

export default subpages;