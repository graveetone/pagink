import usePaginkQuery from './paginkQuery';
import usePaginkMutation from './paginkMutation';

function PaginkAPI(endpoints) {
  const HOST = process.env.REACT_APP_API_HOST;

  const BASE_API_ENDPOINT = "api/v1"

  const getEndpoint = (key, ...params) => {
    const endpointWithParams = endpoints[key](...params);
    const fullEndpoint = `${HOST}/${BASE_API_ENDPOINT}/${endpointWithParams}`;
    return fullEndpoint;
  }


  return { getEndpoint, usePaginkQuery, usePaginkMutation }
}

export default PaginkAPI;
