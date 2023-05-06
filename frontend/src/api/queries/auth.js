import PaginkAPI from './../PaginkAPI'
import axios from 'axios';
import helpers from './../../helpers'

const HOST = "http://192.168.1.108:3000"

const endpoints = {
    login: () => `${HOST}/login`,
    validateUsername: () => `validate_username`,
    validateEmail: () => `validate_email`,
    logout: () => `${HOST}/logout`,

};

const { getEndpoint, usePaginkQuery, usePaginkMutation } = PaginkAPI(endpoints);


const useLoginMutation = () => {
    const endpointKey = 'login'
    return usePaginkMutation(endpoints[endpointKey](), 'POST');
};

const validateUsername = async username => {
    const endpointKey = 'validateUsername';
    const endpoint = getEndpoint(endpointKey);
    const response = await axios.get(endpoint, { params: { username: username } });
    alert(response.data.usernameValid)
    return response.data.usernameValid;
};


const validateEmail = email => {
    // const queryKey = ['validate', username];
    const endpointKey = 'validateEmail';

    axios.get(endpoints[endpointKey]).then(response => console.log(response))
    // return usePaginkQuery(queryKey, getEndpoint(endpointKey, null, {username: username}));
};

const useLogoutMutation = () => {
    const endpointKey = 'logout'
    const token = helpers.getTokenFromSession()
    return usePaginkMutation(endpoints[endpointKey](), 'DELETE', { headers: { Authorization: token } });
};

export {
    useLoginMutation,
    useLogoutMutation,
    validateUsername,
    validateEmail
}
