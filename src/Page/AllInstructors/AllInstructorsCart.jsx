

const AllInstructorsCart = ({ allInstructors,index }) => {
    const {name,email,image} =allInstructors
    return (
        <tr className='bg-violet-600 text-white'>
            <th>
                <label className="text-red-600">
                    {index + 1}.
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                       
                    </div>
                </div>
            </td>
            
            <td>{email}</td>
        
        </tr>
    );
};

export default AllInstructorsCart;