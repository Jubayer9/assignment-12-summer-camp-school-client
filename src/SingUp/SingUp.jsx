import { Link } from "react-router-dom";
import loginImg from "../assets/img/musical-melody-symbols-with-many-doodle-kids-cartoon-character_1308-62193.avif";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Page/Provider/AuthProvider";
const SingUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser}=useContext(AuthContext)
    const onSubmit = data =>{
        console.log(data)
        createUser(data.email ,data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    return (
      <div>
     <div className=" bg-white">
  <div className="hero-content   ">
    <div className="text-center lg:text-left ">
     <img  src={loginImg} alt="" />
    </div>
    <div className="card flex-shrink-0 text-white  max-w-sm shadow-2xl w-full mr-36 bg-violet-500">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <h1 className="text-4xl text-center  font-bold"> Sign up now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text"  {...register("name", { required: true, maxLength: 20 })} name="name" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name="photoURL"  {...register("URL", { required: true })}placeholder="Photo URL" className="input input-bordered" />
          {errors.URL && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password", { required: true,
             minLength: 6 ,
             pattern:/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#*])(?=.*[a-z])/
             })} name="password" placeholder="Password" className="input input-bordered" />
          {errors.password?.type === 'minLength' && <p  className="text-red-600">password Maximum 6 digit Please </p>}
          {errors.password?.type === 'pattern' && <p  className="text-red-600">password one Upper,one case lower case, one special character and Maximum 6 digit  </p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> Confirm password</span>
          </label>
          <input type="password"  {...register("Confirm", { required: true, minLength: 6, })} name="Confirm" placeholder=" Confirm password" className="input input-bordered" />
          {errors.Confirm?.type === 'minLength' && <p  className="text-red-600">password Not match</p>}            
        </div>
        
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sing Up" />
     
        </div>
        <p>
        Already have an account ?
        <Link className="text-red-500" to='/login'> Login</Link>

        </p>
      </form >
    </div>
  </div>
</div>   
      </div>
    );
};

export default SingUp;