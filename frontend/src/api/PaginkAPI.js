import usePaginkQuery from './paginkQuery';
import usePaginkMutation from './paginkMutation';

function PaginkAPI(endpoints) {
  const HOST = "http://192.168.1.108:3000"

  const BASE_API_ENDPOINT = "api/v1"

  const getEndpoint = (key, ...params) => {
    const endpointWithParams = endpoints[key](...params);
    const fullEndpoint = `${HOST}/${BASE_API_ENDPOINT}/${endpointWithParams}`;
    return fullEndpoint;
  }


  return { getEndpoint, usePaginkQuery, usePaginkMutation }
}

export default PaginkAPI;
