import PaginkAPI from "../PaginkAPI";
import helpers from "../../helpers";

const endpoints = {
    like: () => 'likes',
    unlike: () => 'likes'
}

const { getEndpoint, usePaginkMutation } = PaginkAPI(endpoints);

const useLikeMutation = (queriesToInvalidate) => {
    const endpointKey = 'like'
    const token = helpers.getTokenFromSession()

    return usePaginkMutation(getEndpoint(endpointKey), 'POST', { headers: { Authorization: token } }, queriesToInvalidate);
};

const useUnlikeMutation = (queriesToInvalidate) => {
    const endpointKey = 'unlike'
    const token = helpers.getTokenFromSession()

    return usePaginkMutation(getEndpoint(endpointKey), 'DELETE', { headers: { Authorization: token } }, queriesToInvalidate);
};

export {
    useLikeMutation,
    useUnlikeMutation
}
