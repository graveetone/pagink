import PaginkAPI from "../PaginkAPI";
import helpers from "../../helpers";

const endpoints = {
    gink: ginkId => `ginks/${ginkId}`,
    ginkComments: ginkId => `ginks/${ginkId}/comments`,
    createGink: () => `ginks`
}

const { getEndpoint, usePaginkQuery, usePaginkMutation } = PaginkAPI(endpoints);

const useGinkQuery = (ginkId) => {
    const queryKey = ['ginks', ginkId];
    const endpointKey = 'gink';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, ginkId));
};

const useGinkCommentsQuery = (ginkId) => {
    const queryKey = ['ginks', ginkId, 'comments'];
    const endpointKey = 'ginkComments';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, ginkId));
};

const useCreateGinkMutation = (userId) => {
    const endpointKey = 'createGink'
    const token = helpers.getTokenFromSession()
    return usePaginkMutation(getEndpoint(endpointKey), 'POST', { headers: { Authorization: token } }, [['users', userId, 'posts'], ['users', userId, 'bookmates_posts']])
        ;
};


export {
    useGinkQuery,
    useGinkCommentsQuery,
    useCreateGinkMutation
}
