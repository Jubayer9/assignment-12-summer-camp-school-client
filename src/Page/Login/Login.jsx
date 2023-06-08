import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/img/musical-melody-symbols-with-many-doodle-kids-cartoon-character_1308-62193.avif";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ' Student logging successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-white">
                <div className="hero-content">
                    <div className="text-center lg:text-left ">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 text-white  max-w-sm shadow-2xl w-full mr-36 bg-violet-500">
                        <form onSubmit={handelLogin} className="card-body">
                            <h1 className="text-4xl text-center  font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />

                            </div>
                            <p>
                                Welcome new Student
                                <Link className="text-red-500" to='/signup'> Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;