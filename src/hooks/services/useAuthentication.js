import { useMutation, useQuery, useQueryClient } from "react-query"
import { useRequest } from "../../util/useAxios";


export const useAuthentication = () => {
    return useMutation(Authenticate);
}

const Authenticate = (data) => {
    const request = useRequest();
    return request({ url: '/user/login', method: 'post', data: data });
}
