import PaginkAPI from './../PaginkAPI'

const endpoints = {
    author: authorId => `authors/${authorId}`,
    authorBooks: authorId => `authors/${authorId}/books`
}

const { getEndpoint, usePaginkQuery } = PaginkAPI(endpoints);

const useAuthorQuery = (authorId) => {
    const queryKey = ['author', authorId]
    const endpointKey = 'author'

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, authorId));
}

const useAuthorBooksQuery = (authorId) => {
    const queryKey = ['author', authorId, 'books']
    const endpointKey = 'authorBooks'

    return usePaginkQuery(queryKey, getEndpoint(endpointKey, authorId));
}
export {
    useAuthorQuery,
    useAuthorBooksQuery
}
