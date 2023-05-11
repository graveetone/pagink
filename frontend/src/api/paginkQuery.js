import { useQuery } from "react-query";
import axios from "axios";
import helpers from "../helpers";


function usePaginkQuery(key, url, options, queryOptions) {
  const token = helpers.getTokenFromSession()
  return useQuery(key, async () => {
    const response = await axios.get(url, { ...options, headers: { Authorization: token } });
    return response.data;
  }, queryOptions);
}

export default usePaginkQuery;
