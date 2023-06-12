import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const EnrolClasses = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=' w-full m-4'>
            <h2>{user.displayName} 😀 your Successful in payed classes is here !!!</h2>
        </div>
    );
};

export default EnrolClasses;