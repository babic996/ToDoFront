import { useMutation, useQuery, useQueryClient } from "react-query"
import { useRequest } from "../../util/useAxios";



export const useTasks = () => {
    return useQuery(
        ['tasks'],
        async () => GetTasks()
    );
}

const GetTasks = async () => {
    const request = useRequest();

    var result = await request({ url: '/task', method: 'get' })
    console.log(result.data.data)
    return result.data.data;
}
