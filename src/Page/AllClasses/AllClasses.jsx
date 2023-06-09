import React, { useEffect, useState } from 'react';
import AllClassCart from './AllClassCart';



const AllClasses = () => {
    const [allClass, setAllClass] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setAllClass(data))
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='text-white'>
                    <tr>
                        <th>
                           #
                        </th>
                        <th>img / Classes</th>
                        <th>Instructor name</th>
                        <th>Price</th>
                        <th> Select</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allClass.map((allClass, index) => <AllClassCart
                            key={allClass._id}
                            allClass={allClass}
                            index={index}
                        ></AllClassCart>)
                    }
                    {/* row 1 */}


                </tbody>
                

            </table>
        </div>
    );
};

export default AllClasses;