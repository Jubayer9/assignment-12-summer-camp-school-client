import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ClassCart from './ClassCart';

const PopularClass = () => {
    const [classes,setClasses]=useState([])
    useEffect(() => {
        fetch('class.json')
            .then(res => res.json())
            .then(data =>{
                const PopularClasses =data.filter(oneClass =>oneClass.category ==='popular')
                setClasses(PopularClasses)})
    }, [])
    return (
        <div>
            <SectionTitle
                heading={'Popular classes'}
                subHeading={'Enjoy your summer fun'}
            ></SectionTitle>
            <div className="mx-[25%] ">
                {
                classes.map(oneClass=><ClassCart
                key={oneClass._id}
                oneClass={oneClass}
        
                ></ClassCart>)
                }
            </div>
        </div>
    );
};

export default PopularClass;