import { Link } from "react-router-dom";

const ManageClassCard = ({ addClass, index }) => {
    const { photoURL, ClassesName, InstructorName, InstructorEmail, AvailableSeats, Price, _id } = addClass
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">


                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    {index + 1}
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
                                <Link to={`/updateClass/${_id}`}>
                                    <button className="btn btn-error btn-outline btn-xs">Update</button>
                                </Link>
                            </th>
                            <th>


                                <a href="#my_modal_8" className="btn  btn-error btn-outline btn-xs">Feedback</a>
                                <div className="modal" id="my_modal_8">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-2xl text-center">Please provide your feedback</h3>
                                        <textarea className="textarea w-full textarea-primary" placeholder="Feedback"></textarea>
                                        <div className="modal-action">
                                            <a href="#" className="btn btn-error btn-outline">Send</a>
                                        </div>
                                    </div>
                                </div>
                            </th>
                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClassCard;