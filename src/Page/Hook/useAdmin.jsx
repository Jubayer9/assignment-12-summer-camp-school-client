import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure ] = useAxiosSecure()
 
    const {data: isAdmin,isLoading: isAminLoading}= useQuery({
        queryKey:['isAdmin',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`students/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return [isAdmin,isAminLoading]
};

export default useAdmin;