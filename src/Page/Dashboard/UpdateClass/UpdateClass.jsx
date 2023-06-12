import React, { useContext } from 'react';
import { useLoaderData, useNavigate, } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateClass = () => {
const {user} =useContext(AuthContext)
    const navigate = useNavigate()
    const Update = useLoaderData()
    const handleUpdateClass = event => {
        event.preventDefault()
        navigate('/updateClass')
       
        
              Swal.fire(
                'Class is Updated Successfully',
                '',
                'success'
              )
            }
        
        
    return (
        <div>
        <div className="hero ">
          
          <div className="hero-content ">
            <form onClick={handleUpdateClass}  className="card w-full   bg-violet-600">
  <h1 className='text-3xl font-semibold my-8  text-white text-center'>
    Welcome Mr. {user.displayName} <br />
    
         </h1>
         <p  className='text-3xl font-semibold mb-9  text-red-500 text-center'>Update your  new Class</p>
         <hr />     
              <div className="card-body grid gap-x-8 gap-y-4 grid-cols-3">
                
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text  text-white">New Class Image</span>
                  </label>
                  <input type="text" placeholder="New photo" name='photoURL' className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">New Class name</span>
                  </label>
                  <input type="text" name='ClassesName' placeholder="New Class " className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">New Instructor name</span>
                  </label>
                  <input type="text" name='InstructorName' placeholder="New name"   className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">New Instructor email</span>
                  </label>
                  <input type="text"  name='InstructorEmail' placeholder="New email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text  text-white">New Available seats</span>
                  </label>
                  <input type="number" name='AvailableSeats' placeholder="ON:" className="input input-bordered" />
                </div>
                <div className="form-control ">
                  <label className="label ">
                    <span className="label-text  text-white">New Price</span>
                  </label>
                  <input type="number" placeholder="$" name='Price' className="input input-bordered" />
                </div>
  
              </div>
              <input className="btn btn-error btn-outline btn-block" type="submit" value="Update" />
  
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateClass;