import PaginkAPI from '../PaginkAPI'
import helpers from '../../helpers';

const endpoints = {
  createReview: () => `reviews`,
  review: reviewId => `reviews/${reviewId}`,
  reviewComments: reviewId => `reviews/${reviewId}/comments`
}
const { getEndpoint, usePaginkQuery, usePaginkMutation } = PaginkAPI(endpoints);

const useCreateReviewMutation = (bookId) => {
  const endpointKey = 'createReview'
  const token = helpers.getTokenFromSession()
  return usePaginkMutation(getEndpoint(endpointKey), 'POST', { headers: { Authorization: token } }, [
    ['books', bookId, 'reviews']
  ]);
};

const useReviewQuery = (reviewId) => {
  const queryKey = ['reviews', reviewId];
  const endpointKey = 'review';

  return usePaginkQuery(queryKey, getEndpoint(endpointKey, reviewId));
};

const useReviewCommentsQuery = (reviewId) => {
  const queryKey = ['reviews', reviewId, 'comments'];
  const endpointKey = 'reviewComments';

  return usePaginkQuery(queryKey, getEndpoint(endpointKey, reviewId));
};

export {
  useCreateReviewMutation,
  useReviewQuery,
  useReviewCommentsQuery
}
