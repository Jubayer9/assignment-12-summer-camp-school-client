import { useLoaderData } from 'react-router-dom';
import ManageClassCard from './ManageClassCard';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ManageClass = () => {
    const{user}=useContext(AuthContext)
    const addClasses =useLoaderData()
    
    return (
        <div className='w-full'>
            <img className='w-36 rounded-full ml-[44%] mt-3 mb-9' src="https://i.ibb.co/sjBcWVz/pngtree-piano-violin-musical-logo-inspiration-isolated-on-white-backgr-png-image-5004482.jpg" alt="" />
        <h1 className='text-2xl font-bold text-center h-20'>Mr. <samp className='text-2xl font-bold text-red-500 text-center h-20'> {user.displayName} </samp> instructor add this new card </h1>
        <hr />
            <table className="table ">
                <thead>
      <tr>
        <th className='mr-32'>#</th>
        <th>New Class Name</th>
        <th>Instructor Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Feedback</th>
      </tr>
    </thead>
    </table>
            {
                addClasses.map((addClass,index) =><ManageClassCard
                key={addClass._id}
                addClass={addClass}
                index={index}
                ></ManageClassCard>)
            }
        </div>
    );
};

export default ManageClass;