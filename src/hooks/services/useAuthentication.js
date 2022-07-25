import { useMutation, useQuery, useQueryClient } from "react-query"
import { useRequest } from "../../util/useAxios";


export const useAuthentication = () => {
    return useMutation(Authenticate);
}

export const useRegisterUser = () => {
    //const queryClient = useQueryClient();
    return useMutation(RegisterUser);
}

export const useAddImage = () => {
    //const queryClient = useQueryClient();
    return useMutation(AddImage);
}

export const usePutUser = () => {
    const queryClient = useQueryClient();
    return useMutation(
        PutUser,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('users');
            }
        });
}

const Authenticate = (data) => {
    const request = useRequest();
    return request({ url: '/user/login', method: 'post', data: data });
}

const RegisterUser = (data) => {
    const request = useRequest();

    return request({ url: '/user/register', method: 'post', data: data })
}
 
const PutUser = (data) => {
    const request = useRequest();
    console.log(data);
    return request({ url: '/user/me', method: 'put', data: data})
}

const AddImage = (data) => {
    const request = useRequest();

    return request({ url: '/user/me/avatar', method: 'post', data: data })
}