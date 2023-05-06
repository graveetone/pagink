import PaginkAPI from './../PaginkAPI'

const endpoints = {
    book: bookId => `books/${bookId}`,
    bookReviews: bookId => `books/${bookId}/reviews`,
    search: query => `books/search`,
    globalSearch: query => 'books/search'
}

const { getEndpoint, usePaginkQuery } = PaginkAPI(endpoints);

const useBookQuery = bookId => {
    const queryKey = ['book', bookId];
    const endpointKey = 'book';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, bookId));
};

const useReviewsQuery = (bookId) => {
    const queryKey = ['books', bookId, 'reviews'];
    const endpointKey = 'bookReviews';
    return usePaginkQuery(queryKey, getEndpoint(endpointKey, bookId));
};
const useSearchQuery = (query) => {
    const queryKey = ['search', query];
    const endpointKey = 'search';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey), { params: { query: query, global: 0 } });
};

const useGlobalSearchQuery = (query) => {
    const queryKey = ['globalSearch', query];
    const endpointKey = 'globalSearch';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey), { params: { query: query, global: 1 } });
};


export {
    useBookQuery,
    useReviewsQuery,
    useSearchQuery,
    useGlobalSearchQuery
}
