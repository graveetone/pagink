import PaginkAPI from "../PaginkAPI";

const endpoints = {
    bookmatesPosts: userId => `users/${userId}/bookmates_posts`,
}

const { getEndpoint, usePaginkQuery } = PaginkAPI(endpoints);

const useBookmatesPostsQuery = (userId) => {
    const queryKey = ['users', userId, 'bookmates_posts'];
    const endpointKey = 'bookmatesPosts';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, userId));
};

export {
    useBookmatesPostsQuery
}
