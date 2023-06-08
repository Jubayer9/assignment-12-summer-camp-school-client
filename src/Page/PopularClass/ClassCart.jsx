import React from 'react';

const ClassCart = ({oneClass}) => {
    const {name,img,teacherName,time,day}=oneClass
    return (
        <div className="hero border-b-4 sm:border-indigo-500 sm:border my-28 rounded-l-full border-indigo-600">
  <div className="hero-content flex-col  lg:flex-row">
    <img src={img} className="max-w-sm classImg sm:rounded-l-full
     shadow-2xl" />
    <div className='m-10 border-l-2 border-red-600 pl-5'> 
      <h1 className="text-5xl font-bold ">{name}</h1>
      <br />
      <hr />
      
      <p className="py-2"> <samp className='text-red-600'> Teacher:</samp> {teacherName}</p>
      <p className="py-2"> <samp className='text-red-600'>Class Time:</samp> {time}</p>
      <p className="py-2"> <samp className='text-red-600'>Day:</samp> {day}</p>
  <button className="btn btn-primary mt-9">Buy Now </button>
    </div>
  </div>
</div>
    );
};

export default ClassCart;