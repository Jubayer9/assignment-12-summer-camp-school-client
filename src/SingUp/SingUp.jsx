import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../assets/img/musical-melody-symbols-with-many-doodle-kids-cartoon-character_1308-62193.avif";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Page/Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
const SingUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleSinIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handleGoogleSinIn = () => {
        googleSinIn()
            .then(result => {
                const loggedInUser = result.user;
                navigate(from, { replace: true });
            })
    }
    const from = location.state?.from?.pathname || "/"

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveStudent = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/students', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveStudent)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: ' New Student created successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate(from, { replace: true });
                                }

                            })
                            .catch(errors => console.error(errors))

                    })
            })

    };

    return (
        <div>
            <div className=" bg-white">
                <div className="hero-content   ">
                    <div className="text-center lg:text-left ">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 text-white  max-w-sm shadow-2xl w-full mr-36 bg-violet-500">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-4xl text-center  font-bold"> Sign up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true, maxLength: 20 })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photoURL"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#*])(?=.*[a-z])/
                                })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password?.type === 'minLength' && <p className="text-red-600">password Maximum 6 digit Please </p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">password one Upper,one case lower case, one special character and Maximum 6 digit  </p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Confirm password</span>
                                </label>
                                <input type="password"  {...register("Confirm", { required: true, minLength: 6, })} name="Confirm" placeholder=" Confirm password" className="input input-bordered" />
                                {errors.Confirm?.type === 'minLength' && <p className="text-red-600">password Not match</p>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sing Up" />

                            </div>
                            <p>
                                Already have an account ?
                                <Link className="text-red-500" to='/login'> Login</Link>

                            </p>
                            <div className="divider ">OR</div>
                            <button onClick={handleGoogleSinIn} className="text-6xl mx-auto" type="button" >
                                <FcGoogle></FcGoogle>

                            </button>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;