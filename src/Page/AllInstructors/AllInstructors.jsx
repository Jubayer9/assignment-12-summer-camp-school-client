import React, { useEffect, useState } from 'react';
import AllInstructorsCart from './AllInstructorsCart';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-school-server-jubayer9.vercel.app/instructor')
            .then(res => res.json())
            .then(data => setAllInstructors(data))
    }, [])
    return (
        <div className='w-1/2 mx-auto'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-red-500 bg-black'>
                        <tr>
                            <th>
                                #
                             </th>
                            <th>Instructor name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allInstructors.map((allInstructors ,index)=> <AllInstructorsCart
                                key={allInstructors._id}
                                index={index}
                                allInstructors={allInstructors}

                            ></AllInstructorsCart>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllInstructors;