import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useClass from '../Hook/useClass';
import { FaBook, FaHome, FaSchool, FaUser, FaUsers } from 'react-icons/fa'
import useAdmin from '../Hook/useAdmin';
import { AuthContext } from '../Provider/AuthProvider';
import useInstructor from '../Hook/useInstructor';
const DashboardNavBar = () => {
  const [selected,] = useClass();
const {user}=useContext(AuthContext)
  const [isAdmin] = useAdmin()
  const [isInstructor] =useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center my-40">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-white  bg-violet-600 h-full ">
<div className="mb-14 mt-3">
<img className='rounded-full w-2/6 ml-24' src={user?.photoURL} alt="" />
<h1 className='text-lg text-center text-red-500 font-medium'>{user.email}</h1>
</div>
<hr />
          {
           isAdmin ?
              <>
                
                <li><NavLink to='allStudent'>
                <FaUser className='text-white'></FaUser>
                Manage Users
                </NavLink></li>
                <li><NavLink to='ManageClass'>
                  <FaSchool className='text-white'></FaSchool>
                  Manage Classes

                </NavLink></li>
                <li><NavLink to='/'></NavLink></li>

              </> :
              <>
              

              </>
                
          }
          {
            isInstructor ?
              <>

                <li><NavLink to='/addClasses'>Add Classes</NavLink></li>
                <li><NavLink to='/ManageClass'>My Classes</NavLink></li>

              </> :
              <>
              </>

          }
            {
             ( !isAdmin &&!isInstructor )?
             <>
              <li><NavLink className="  mb-6" to='/myClasses'>
                  My Selected Classes
                  <button className="border-none badge  badge-secondary ">+{selected?.length || 0}</button>
                </NavLink></li>
                <li><NavLink to='/enrolClasses'>My Enrolled Classes</NavLink></li>
                <li><NavLink to='/'></NavLink></li>
             </>:<></>
            }

          <hr />
          <li><NavLink to='/'>
            <FaHome></FaHome>
            Home
          </NavLink></li>
          <li><NavLink to='/allClasses'><FaBook></FaBook>Our Classes</NavLink></li>
          <li><NavLink to='/instructor'> <FaUsers></FaUsers> Instructors</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default DashboardNavBar;







