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
            queryClient.invalidateQueries(queriesToInvalidate, {
                force: true
            })

        }
    }
    );
}
export default usePaginkMutation;
