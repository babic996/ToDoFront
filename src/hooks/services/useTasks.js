import { useMutation, useQuery, useQueryClient } from "react-query"
import { useRequest } from "../../util/useAxios";



export const useTasks = () => {
    return useQuery(
        ['tasks'],
        async () => GetTasks()
    )
}

export const useLoggedInUser = () => {
    return useQuery(
        ['user'],
        async () => GetLoggedInUser()
    )
}

export const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation(
        DeleteTask,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            }
        });
}

export const useUpdateTaskDescription = () => {
    const queryClient = useQueryClient();
    return useMutation(
        UpdateTaskDescription,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            }
        });
}

export const useUpdateTaskCompleted = () => {
    const queryClient = useQueryClient();
    return useMutation(
        UpdateTaskCompleted,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            }
        });
}

export const useAddTask = () => {
    const queryClient = useQueryClient();
    
    return useMutation(AddTask,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('tasks');
            }
        });
}

const GetTasks = async () => {
    const request = useRequest();

    var result = await request({ url: `/task`, method: 'get' })
    console.log(result.data.data)
    return result.data.data;
}

const DeleteTask = (id) => {
    const request = useRequest();
    return request({ url: `/task/${id}`, method: 'delete' })
}

const AddTask = (data) => {
    const request = useRequest();
    console.log('create')
    return request({ url: '/task', method: 'post', data: data })
}

const UpdateTaskCompleted = (data) => {
    const request = useRequest();
    console.log(data);
    const data1={"completed": data.completed}; 
    return request({ url: `/task/${data.id}`, method: 'put', data: data1})
}

const UpdateTaskDescription = (data) => {
    const request = useRequest();
    const data1={"description": data.description};
    return request({ url: `/task/${data.id}`, method: 'put', data: data1})
}

const GetLoggedInUser = async () => {
    const request = useRequest();

    var result = await request({ url: '/user/me', method: 'get' })
    //console.log(result.data.data)
    return result.data;
}
