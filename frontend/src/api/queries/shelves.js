import PaginkAPI from "../PaginkAPI";
import helpers from "../../helpers";

const endpoints = {
    shelve: shelveId => `shelves/${shelveId}`,
    shelves: userId => `users/${userId}/shelves`,
    createShelve: () => 'shelves',
    addBookToShelve: (shelveId) => `shelves/${shelveId}/add_book`
}

const { getEndpoint, usePaginkQuery, usePaginkMutation } = PaginkAPI(endpoints);

const useShelveQuery = (shelveId) => {
    const queryKey = ['shelves', shelveId];
    const endpointKey = 'shelve';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, shelveId));
};

const useShelvesQuery = userId => {
    const queryKey = ['users', userId, 'shelves'];
    const endpointKey = 'shelves';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, userId));
};

const useCreateShelveMutation = (authorId) => {
    const endpointKey = 'createShelve'
    const token = helpers.getTokenFromSession()
    return usePaginkMutation(getEndpoint(endpointKey), 'POST', { headers: { Authorization: token } }, [['users', `${authorId}`, 'shelves']]);
};

const useAddBookToShelveMutation = (shelveId, queryOptions) => {
    const endpointKey = 'addBookToShelve'
    const token = helpers.getTokenFromSession()
    return usePaginkMutation(getEndpoint(endpointKey, shelveId), 'POST', { headers: { Authorization: token } }, [], queryOptions);
};

export {
    useShelveQuery,
    useShelvesQuery,
    useCreateShelveMutation,
    useAddBookToShelveMutation
}
