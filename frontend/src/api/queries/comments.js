import PaginkAPI from "../PaginkAPI";
import helpers from "../../helpers";

const endpoints = {
    createComment: () => 'comments'
}

const resourceKeysByCommentableType = {
    'Review': 'reviews',
    'Gink': 'ginks'
}
const { getEndpoint, usePaginkMutation } = PaginkAPI(endpoints);

const useCreateCommentMutation = (commentable) => {
    const { commentable_id: id, commentable_type: type } = commentable;
    const endpointKey = 'createComment'
    const token = helpers.getTokenFromSession()
    console.log([resourceKeysByCommentableType[type], id, 'comments'])
    return usePaginkMutation(getEndpoint(endpointKey), 'POST', { headers: { Authorization: token } }, [
        [resourceKeysByCommentableType[type], id, 'comments']
    ]);
};


export {
    useCreateCommentMutation
}
