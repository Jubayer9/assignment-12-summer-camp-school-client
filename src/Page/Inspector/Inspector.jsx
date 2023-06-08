import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const Inspector = () => {
    const [instructor,setInstructor]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructor')
        .then(res => res.json())
        .then(data=>{
            const instructor =data.filter(sir =>sir.number ==='0134534456656')
            setInstructor(instructor)
        })
    },[])
    return (
      <>
      <SectionTitle
       heading=' Popular Instructor'
       subHeading=' Hurry up learning'
       ></SectionTitle>
      <div className="grid grid-rows-2 gap-4 md:grid-flow-col "> 
  
        {
            instructor.map(sir=><InstructorCard
            key={sir._id}
            sir={sir}
            
            ></InstructorCard>)
        }
      </div>
    
      </>
    );
};

export default Inspector;