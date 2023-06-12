import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";


const useInstructor = () => {
    const  {user}= useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const {data:isInstructor,isLoading: isInstructorLoading}=useQuery({
        queryKey:['isInstructor',user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/students/isInstructor/${user?.email}`)

             return res.data.isInstructor;
        }
    })
    return[isInstructor,isInstructorLoading]
};

export default useInstructor;