import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useClass from '../Hook/useClass';
import { useContext } from 'react';

const AllClassCart = ({ allClass, index }) => {
    const { _id, image, name, instructorName, availableSeats, price } = allClass;
    const { user } = useContext(AuthContext)
    const [,refetch]=useClass()
    const navigate = useNavigate();
    const location = useLocation()
    const handleSelect = allClass => {
        if (user && user.email) {
            const selectedClass = { SelectedClassId: _id, image, name, instructorName, availableSeats, price,email:user.email }
            fetch('https://summer-camp-school-server-jubayer9.vercel.app/selected', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: ' Add the class in In your list',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login !!!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <tr className='bg-violet-600 text-white'>
            <th>
                <label>
                    {index + 1}.
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">available Seats : {availableSeats}</div>
                    </div>
                </div>
            </td>
            <td>
                {instructorName}
                <br />

            </td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleSelect(allClass)} className="btn btn-outline btn-error"> Select</button>
            </th>
        </tr>
    );
};

export default AllClassCart;