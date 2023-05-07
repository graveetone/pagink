import PaginkAPI from "../PaginkAPI";

const endpoints = {
    bookmateesPosts: userId => `users/${userId}/bookmatees_posts`,
}

const { getEndpoint, usePaginkQuery } = PaginkAPI(endpoints);

const useBookmateesPostsQuery = (userId) => {
    const queryKey = ['users', userId, 'bookmatees_posts'];
    const endpointKey = 'bookmateesPosts';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, userId));
};

export {
    useBookmateesPostsQuery
}
