import { useLoaderData } from 'react-router-dom';
import ManageClassCard from './ManageClassCard';

const ManageClass = () => {
    const addClasses =useLoaderData()
    return (
        <div>
            <table className="table">
                <thead>
      <tr>
        <th className='mr-32'>#</th>
        <th>Name</th>
        <th>Job</th>
        <th></th>
        <th>Color</th>
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