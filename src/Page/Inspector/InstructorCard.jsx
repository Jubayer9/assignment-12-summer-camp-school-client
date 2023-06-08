
const InstructorCard = ({sir}) => {
    const {teacherName,email,number,img,best}=sir
    return (
        <>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
      

                        
                        <div className="card bg-gradient-to-r from-violet-700 to-violet-600 w-96 shadow-violet-700 shadow-lg">
      <p className="text-red-600 mx-44 w-16  rounded-b-lg bg-black text-center">{best}</p>
  <figure className="px-10 pt-10">
    <img src={img} alt="" className="rounded-full 
    " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-red-600">{teacherName}</h2>
    <p className='text-white hover:text-red-600'>Email: {email}</p>
    <p className='text-white hover:text-red-600'>Number: {number}</p>
    <div className="card-actions">
    </div>
  </div>
</div>
       </div>
      
                       
        
             
        
       </>
    );
};

export default InstructorCard;