import Username from './Username'
import Password from './Password'
import Email from './Email'
import FinishRegistration from './FinishRegistration'
import StartRegistration from './StartRegistration'
import PasswordConfirmation from './PasswordConfirmation'
import ConfirmAccount from './ConfirmAccount'
import Photo from './Photo'

const subpages = {
    StartRegistration: <StartRegistration />,
    Username: <Username />,
    Email: <Email />,
    Password: <Password />,
    PasswordConfirmation: <PasswordConfirmation />,
    Photo: <Photo />,
    FinishRegistration: <FinishRegistration />,
    ConfirmAccount: <ConfirmAccount />
}

export default subpages;