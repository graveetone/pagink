import PaginkAPI from "../PaginkAPI";

const endpoints = {
    shelve: shelveId => `shelves/${shelveId}`,
    shelves: userId => `users/${userId}/shelves`
}

const { getEndpoint, usePaginkQuery } = PaginkAPI(endpoints);

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

export {
    useShelveQuery,
    useShelvesQuery

}
