import React from 'react';
import { FaUserShield } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const AllStudent = () => {
    const {data:students=[],refetch}=useQuery(['students'],async()=>{
        const res = await fetch('http://localhost:5000/students')
        return res.json();
    })
   const handleMakeAdmin =student =>{
    fetch(`http://localhost:5000/students/admin/${student._id}`,{
        method:'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${student.name}is Admin Now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
   }
    return (
        <div>
           <h3 className='text-3xl font-semibold'>
           Total Students {students.length}

           </h3>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Boss</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
      students.map((student,index) =><tr
      key={student._id}
      >
        <th>
          <label>
            {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              
            </div>
            <div>
              <div className="font-bold">{student.name}</div>
            </div>
          </div>
        </td>
        <td>
          {student.email}
        
        </td>
     
        <td>
          { student.role === 'admin'? 'Instructor':
          <button onClick={()=>handleMakeAdmin(student)} className='btn'>
            <FaUserShield></FaUserShield>
          </button>
           
          }
        </td>
        <td>
          <button className="btn btn-ghost btn-xs">details</button>
        </td>
     
      </tr>)
      }
  
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default AllStudent;