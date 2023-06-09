
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from 'react-query';

const useClass = () => {
    const { user } = useContext(AuthContext)
    const {refetch, data: selected = [] } = useQuery({
        queryKey: ['selected', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selected?email=${user.email}`)
            return response.json()
        }
    })
    console.log(selected);
    return [selected,refetch]
};

export default useClass;