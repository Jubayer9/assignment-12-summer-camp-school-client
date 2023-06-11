import { Link } from "react-router-dom";
import profileImg from "../../assets/img/images.png"
import Logo from '../../assets/img/pngtree-piano-violin-musical-logo-inspiration-isolated-on-white-backgr-png-image_5004482.jpg'
import { useContext } from "react";
import { AuthContext } from "../../Page/Provider/AuthProvider";
import useClass from "../../Page/Hook/useClass";
import useAdmin from "../../Page/Hook/useAdmin";
import DarkMode from "../../Page/Dark/DarkMode";
const NevBar = () => {
  const [selected,] = useClass();
  const [isAdmin]=useAdmin()
  const { user, logOut } = useContext(AuthContext)
  console.log(isAdmin)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  return (
    <>
      <div className="navbar  text-white bg-violet-700">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52">
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/instructor' >Instructors</Link></li>
              <li><Link to='/allClasses'>classes</Link></li>
             {isAdmin ?
               <li>
                
               <Link to='/allStudent'>Dashboard
                 <button className="border-none badge  badge-secondary ">+{selected?.length || 0}</button>
               </Link></li>:
                <li>
               <Link to='/myClasses'>Dashboard
                 <button className="border-none badge  badge-secondary ">+{selected?.length || 0}</button>
               </Link></li>
             }

            </ul>
          </div>
          <img className="w-11 rounded-full" src={Logo} alt="" />
          <Link to='/' className="btn btn-ghost normal-case text-xl">BAND<samp className="text-red-600 font-bold">ZOON</samp></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/instructor'> Instructors</Link></li>

            <li><Link to='/allClasses'>classes</Link></li>
          { 
          isAdmin?
          <li>
                
          <Link to='allStudent'>Dashboard
            <button className="border-none badge  badge-secondary ">+{selected?.length || 0}</button>
          </Link></li>:
           <li>
          <Link to='/myClasses'>Dashboard
            <button className="border-none badge  badge-secondary ">+{selected?.length || 0}</button>
          </Link></li>
              
            }
          </ul>
        </div>
        <div className="navbar-end">

          {
            user ?
              <>
                <p className=' text-violet-700 font-semibold hover:text-white'>🎸 {user.displayName} 🎸</p>
                <img className="rounded-full w-10 mx-6" src={user && user.photoURL ? user.photoURL : profileImg} alt="" />

                <Link onClick={handleLogOut} to='/login' className=" btn btn-error btn-outline ">Log out</Link>
              </> :
              <>
                <Link to='/login' className=" btn btn-error btn-outline ">Login</Link>
              </>
          }
          <DarkMode></DarkMode>
        </div>
      </div>
    </>
  );
};

export default NevBar;
