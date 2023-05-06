import { useQuery } from "react-query";
import axios from "axios";

function usePaginkQuery(key, url, options) {
  return useQuery(key, async () => {
    const response = await axios.get(url, options);
    return response.data;
  });
}

export default usePaginkQuery;
