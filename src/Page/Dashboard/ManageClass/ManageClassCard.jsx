import React from 'react';






const ManageClassCard = ({ addClass,index }) => {
   const {photoURL,ClassesName,InstructorName,InstructorEmail,AvailableSeats,Price}=addClass
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">


                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    {index+1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={photoURL} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{ClassesName}</div>
                                        <div className="text-sm opacity-50">Available Seats: {AvailableSeats}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {InstructorName}
                                <br />
                                <span className="badge badge-ghost badge-sm">Email: {InstructorEmail}</span>
                            </td>
                            <td>{Price}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClassCard;