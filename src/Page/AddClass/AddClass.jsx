import React from 'react';
import Swal from 'sweetalert2';

const AddClass = () => {
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
      console.log(newClass);
      fetch('http://localhost:5000/addClass',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(newClass)
      })
      .then(res =>res.json())
      .then(data=>{
        console.log(data);
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
    <div className=''>
      <div className="hero  ">
        <div className="hero-content ">

          <form onSubmit={handleAddClass} className="card w-full   bg-violet-600">
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
                <input type="text" name='InstructorName' placeholder="Instructor name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white">Instructor email</span>
                </label>
                <input type="text" name='InstructorEmail' placeholder="Instructor email" className="input input-bordered" />
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