import helpers from "../../helpers";
import PaginkAPI from "../PaginkAPI";

const endpoints = {
    user: userId => `users/${userId}`,
    userPosts: userId => `users/${userId}/posts`,
    currentUser: () => `current_user`
}

const { getEndpoint, usePaginkQuery } = PaginkAPI(endpoints);

const useUserQuery = (userId) => {
    const queryKey = ['users', userId];
    const endpointKey = 'user';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, userId));
};

const useUserPostsQuery = (userId) => {
    const queryKey = ['users', userId, 'posts'];
    const endpointKey = 'userPosts';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, userId));
};

const useCurrentUserQuery = () => {
    const token = helpers.getTokenFromSession()
    const queryKey = ['currentUser'];
    const endpointKey = 'currentUser';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey), { headers: { Authorization: token } });
};


export {
    useUserQuery,
    useUserPostsQuery,
    useCurrentUserQuery
}
