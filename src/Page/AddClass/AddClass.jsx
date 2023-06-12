import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const AddClass = () => {
  const {user}=useContext(AuthContext)
  const handleAddClass = event => {
    event.preventDefault()
    const form = event.target;
    const photoURL = form.photoURL.value;
    const ClassesName = form.ClassesName.value;
    const InstructorName = form.InstructorName.value;
    const InstructorEmail = form.InstructorEmail.value;
    const AvailableSeats = form.AvailableSeats.value;
    const Price = form.Price.value;
    const newClass ={photoURL,
      ClassesName,
      InstructorName,
      InstructorEmail,
      AvailableSeats,
      Price}
      fetch('https://summer-camp-school-server-jubayer9.vercel.app/addClass',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newClass)
      })
      .then(res =>res.json())
      .then(data=>{
        if(data.insertedId){
          Swal.fire(
            'New Class Added Now',
            '',
            'success'
          )
        }
      })
  }
  return (
    <div>
      <div className="hero ">
        
        <div className="hero-content ">
          <form onSubmit={handleAddClass} className="card w-full   bg-violet-600">
<h1 className='text-3xl font-semibold my-9  text-white text-center'>
  Welcome Mr. {user.displayName}
       </h1>
       <hr />     
            <div className="card-body grid gap-x-8 gap-y-4 grid-cols-3">
              
              <div className="form-control ">
                <label className="label">
                  <span className="label-text  text-white">Class Image</span>
                </label>
                <input type="text" placeholder="photo URL" name='photoURL' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Class name</span>
                </label>
                <input type="text" name='ClassesName' placeholder="Class name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Instructor name</span>
                </label>
                <input type="text" name='InstructorName' placeholder="Instructor name"defaultValue={user.displayName}   className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Instructor email</span>
                </label>
                <input type="text" defaultValue={user.email} name='InstructorEmail' placeholder="Instructor email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Available seats</span>
                </label>
                <input type="number" name='AvailableSeats' placeholder="Available seats" className="input input-bordered" />
              </div>
              <div className="form-control ">
                <label className="label ">
                  <span className="">Price</span>
                </label>
                <input type="number" placeholder="Price" name='Price' className="input input-bordered" />
              </div>

            </div>
            <input className="btn btn-error btn-outline btn-block" type="submit" value="Add Class" />

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;