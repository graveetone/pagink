import { useQuery } from "react-query";
import axios from "axios";
import helpers from "../helpers";


function usePaginkQuery(key, url, options) {
  const token = helpers.getTokenFromSession()
  return useQuery(key, async () => {
    const response = await axios.get(url, { ...options, headers: { Authorization: token } });
    return response.data;
  });
}

export default usePaginkQuery;
