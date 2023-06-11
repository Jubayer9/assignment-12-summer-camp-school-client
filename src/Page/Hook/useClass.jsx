
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

const useClass = () => {
    const { user,loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        enabled:!loading&&!!user?.email,

        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)

            console.log('res axios', res);
            return res.data

        },
    })
    console.log(selected);
    return [selected, refetch]
};

export default useClass;