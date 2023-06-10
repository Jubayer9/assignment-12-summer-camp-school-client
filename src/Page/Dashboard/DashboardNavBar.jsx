import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useClass from '../Hook/useClass';
import { FaBook, FaHome } from 'react-icons/fa'
import useAdmin from '../Hook/useAdmin';
const DashboardNavBar = () => {
  const [selected,] = useClass();

  const [isAdmin] = useAdmin()
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
          {
            isAdmin ?
              <>
                <li><NavLink to='allStudent'>
                  All Students

                </NavLink></li>
                <li><NavLink to='/addClasses'>Add Classes</NavLink></li>
                <li><NavLink to='/'></NavLink></li>

              </> :
              <>
                <li><NavLink className="border-none badge  badge-secondary mb-6" to='/myClass'>
                  My Selected Classes
                  <button className="border-none badge  badge-secondary ">+{selected?.length || 0}</button>
                </NavLink></li>
                <li><NavLink to='/'>My Enrolled Classes</NavLink></li>
                <li><NavLink to='/'></NavLink></li>

              </>
          }
          <hr />
          <li><NavLink to='/'>
            <FaHome></FaHome>
            Home
          </NavLink></li>
          <li><NavLink to='/allClasses'><FaBook></FaBook>Our Classes</NavLink></li>
        </ul>

      </div>
    </div>
  );
};

export default DashboardNavBar;







