import helpers from "../../helpers";
import PaginkAPI from "../PaginkAPI";

const endpoints = {
    user: userId => `users/${userId}`,
    userPosts: userId => `users/${userId}/posts`,
    currentUser: () => `current_user`,
    followUser: userId => `users/${userId}/follow`,
    unfollowUser: userId => `users/${userId}/unfollow`,
    relatedUsers: userId => `users/${userId}/related_users`
}

const { getEndpoint, usePaginkQuery, usePaginkMutation } = PaginkAPI(endpoints);

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
    const tokenIsPresent = !!token;
    
    const queryKey = ['currentUser'];
    const endpointKey = 'currentUser';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey), { headers: { Authorization: token } }, {enabled: tokenIsPresent});
};

const useFollowUserMutation = (currentUserId, userId) => {
    const endpointKey = 'followUser'
    const token = helpers.getTokenFromSession()
    return usePaginkMutation(getEndpoint(endpointKey, userId), 'POST', { headers: { Authorization: token } }, [
        ['users', currentUserId, 'bookmatees_posts'],
        ['users', userId]
    ]);
};

const useUnfollowUserMutation = (currentUserId, userId) => {
    const endpointKey = 'unfollowUser'
    const token = helpers.getTokenFromSession()
    return usePaginkMutation(getEndpoint(endpointKey, userId), 'DELETE', { headers: { Authorization: token } }, [
        ['users', currentUserId, 'bookmatees_posts'],
        ['users', userId]
    ]);
};

const useUserRelatedUsersQuery = (userId) => {
    const token = helpers.getTokenFromSession()
    const queryKey = ['user', userId, 'relatedUsers'];
    const endpointKey = 'relatedUsers';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, userId), { headers: { Authorization: token } });
};
export {
    useUserQuery,
    useUserPostsQuery,
    useCurrentUserQuery,
    useFollowUserMutation,
    useUnfollowUserMutation,
    useUserRelatedUsersQuery
}
