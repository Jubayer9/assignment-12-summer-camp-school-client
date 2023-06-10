import React from 'react';

const AddClass = () => {
    return (
        <div>
            <div className="hero  bg-base-200 ">
  <div className="hero-content">
   
    <div className="card w-full shadow-2xl bg-base-100">
      <div className="card-body grid gap-x-8 gap-y-4 grid-cols-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class Image</span>
          </label>
          <input type="text" placeholder="URL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input type="text" placeholder="Class name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor name</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor email</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available seats</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control ">
          <label className="label ">
            <span className="">Price</span>
          </label>
          <input type="text" placeholder="password" className="input   input-bordered" />
        </div>
        <div className="form-control mt-6">
        </div>
      </div>
          <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddClass;