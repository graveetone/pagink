import PaginkAPI from './../PaginkAPI';

const endpoints = {
    statistics: () => 'statistics',
}

const { getEndpoint, usePaginkQuery } = PaginkAPI(endpoints);

const useStatisticsQuery = () => {
    const queryKey = ['statistics'];
    const endpointKey = 'statistics';

    return usePaginkQuery(queryKey, getEndpoint(endpointKey));
};


export {
    useStatisticsQuery
}
