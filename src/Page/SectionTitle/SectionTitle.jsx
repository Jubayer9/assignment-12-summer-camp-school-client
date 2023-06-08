import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-white text-center'>
            <h1 className='font-semibold text-5xl mt-24 mb-8'>{heading}</h1>
            <p className='text-xl text-red-500 mb-24'>{subHeading}</p>
            
        </div>
    );
};

export default SectionTitle;