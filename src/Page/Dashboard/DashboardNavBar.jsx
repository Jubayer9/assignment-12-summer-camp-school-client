import React from 'react';
import { NavLink } from 'react-router-dom';
import useClass from '../Hook/useClass';
import {  FaBook, FaHome } from 'react-icons/fa'
import MyClass from './MyClass/MyClass';
const DashboardNavBar = () => {
    const [selected,] = useClass();
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center my-40">
          <MyClass></MyClass>
         
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80  text-white  bg-violet-600 h-full ">
            
            <li><NavLink to='/dashboard/myClass'>
                              My Selected Classes
                              <button className="btn bg-violet-600 border-none badge  badge-secondary">
                              +{selected?.length || 0}
                              </button>
                          </NavLink></li>
                          <li><NavLink to='/dashboard/'>My Enrolled Classes</NavLink></li>
                          <li><NavLink to='/dashboard/'></NavLink></li>
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







