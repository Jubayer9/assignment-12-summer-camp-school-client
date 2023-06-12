import { data } from 'autoprefixer';
import React from 'react';
import { FaUser, FaUserShield } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const AllStudent = () => {
    const {data:students=[],refetch}=useQuery(['students'],async()=>{
        const res = await fetch('https://summer-camp-school-server-jubayer9.vercel.app/students')
        return res.json();
    })



const handleMakeInstructor= students =>{
  fetch(`https://summer-camp-school-server-jubayer9.vercel.app/students/isInstructor/${students._id}`,{
    method:'PATCH',
  })
.then(res=>res.json())
.then(data=>{
  if(data.modifiedCount){
    refetch()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${students.name}is instructor Now`,
      showConfirmButton: false,
      timer: 1500
    })
  }
})
}



   const handleMakeAdmin =student =>{
    fetch(`https://summer-camp-school-server-jubayer9.vercel.app/students/admin/${student._id}`,{
        method:'PATCH'
    })
    .then(res => res.json())
    .then(data =>{
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
          { student.role === 'admin'? 'admin': 
          <button onClick={()=>handleMakeAdmin(student)} className='btn'> <FaUserShield></FaUserShield>
          </button>
           
          }
        </td>
        <td>
          {
            student.role === 'isInstructor' ? 'Instructor':
            <button onClick={()=>handleMakeInstructor(student)} className='btn'><FaUser></FaUser>
            </button>
          }
         
        </td>
     
      </tr>
      )
      }
  
      
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default AllStudent;