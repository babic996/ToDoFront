import { useMutation, useQuery, useQueryClient } from "react-query"
import { useRequest } from "../../util/useAxios";


export const useAuthentication = () => {
    return useMutation(Authenticate);
}

export const useRegisterUser = () => {
    //const queryClient = useQueryClient();
    return useMutation(RegisterUser);
}

const Authenticate = (data) => {
    const request = useRequest();
    return request({ url: '/user/login', method: 'post', data: data });
}

const RegisterUser = (data) => {
    const request = useRequest();

    return request({ url: '/user/register', method: 'post', data: data })
}

const LogoutUser = (data) => {
    const request = useRequest();
}
