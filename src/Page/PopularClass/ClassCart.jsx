import React from 'react';

const ClassCart = ({oneClass}) => {
    const {name,img,teacherName,time,day,tk}=oneClass
    return (
        <div 
        data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
        className="hero border-b-4 sm:border-indigo-500 sm:border my-28 rounded-l-full border-indigo-600">
  <div className="hero-content flex-col  lg:flex-row">
    <img src={img} className="max-w-sm classImg sm:rounded-l-full
     shadow-2xl" />
    <div className='m-10 border-l-2 border-red-900 pl-5'> 
      <h1 className="text-5xl font-bold text-red-600 ">{name}</h1>
      <br />
      <hr />
      
      <p className="py-2"> <samp className='text-red-600'> Teacher:</samp> {teacherName}</p>
      <p className="py-2"> <samp className='text-red-600'>🕑: </samp> {time}</p>
      <p className="py-2"> <samp className='text-red-600'>🗓️:</samp> {day}</p>
      <p className="py-2"> <samp className='text-red-600'>💵: $</samp>{tk}</p>
  <button className="btn btn-outline btn-primary mt-9">Buy Now </button>
    </div>
  </div>
</div>
    );
};

export default ClassCart;