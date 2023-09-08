import PaginkAPI from './../PaginkAPI'
import axios from 'axios';
import helpers from './../../helpers'

const HOST = process.env.REACT_APP_API_HOST;

const endpoints = {
    login: () => `${HOST}/login`,
    validateUsername: () => `validate_username`,
    validateEmail: () => `validate_email`,
    logout: () => `${HOST}/logout`,
    signup: () => `${HOST}/signup`

};

const { getEndpoint, usePaginkMutation } = PaginkAPI(endpoints);


const useLoginMutation = () => {
    const endpointKey = 'login'
    return usePaginkMutation(endpoints[endpointKey](), 'POST');
};

const validateUsername = (username, onSuccess) => {
    const endpointKey = 'validateUsername'
    axios.get(getEndpoint(endpointKey), { params: { username: username } }).then(
        (data) => {
            onSuccess(data)
        }
    )
};


const validateEmail = email => {
    const endpointKey = 'validateEmail';
    axios.get(getEndpoint(endpointKey), { params: { email: email } }).then(
        (data) => {
            onSuccess(data)
        }
    )
};

const useLogoutMutation = () => {
    const endpointKey = 'logout'
    const token = helpers.getTokenFromSession()
    return usePaginkMutation(endpoints[endpointKey](), 'DELETE', { headers: { Authorization: token } });
};

const useRegistrationMutation = () => {
    const endpointKey = 'signup'
    return usePaginkMutation(endpoints[endpointKey](), 'POST');
};


export {
    useLoginMutation,
    useLogoutMutation,
    validateUsername,
    validateEmail,
    useRegistrationMutation
}
