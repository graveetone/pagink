import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

function usePaginkMutation(url, method, options, queriesToInvalidate) {
    const queryClient = useQueryClient();

    return useMutation(
        async (data) => {
            const response = await axios(url, { method: method, data: data, ...options });
            return { data: response.data, headers: response.headers };
        }, {
        onSuccess: () => {
            if (queriesToInvalidate) {
                queriesToInvalidate.forEach(queryToInvalidate => {
                    queryClient.invalidateQueries(queryToInvalidate, {
                        force: true,
                        exact: false
                    })
                })
            }
        }
    }
    );
}
export default usePaginkMutation;
