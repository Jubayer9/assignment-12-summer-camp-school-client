import React from 'react';
import { Link } from 'react-router-dom';
import useClass from '../Hook/useClass';

const DashboardNavBar = () => {
    const [selected,]=useClass();
    return (
        <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content text-end m-5">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-outline btn-error drawer-button "> Dashboard Menu</label>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer" className="drawer-overlay "></label>
    <ul className="menu p-4 w-80 bg-violet-600 h-full font-semibold 
     text-white ">
      {/* Sidebar content here */}
      <li><Link to='/dashboard/myClass'>
      My Class
      <button className="btn bg-violet-600 border-none">
  <div className="badge  badge-secondary">+{selected?.length ||0}</div>
</button>
      </Link></li>
      <li><Link to='/dashboard/'>Sidebar Item 2</Link></li>
      
    </ul>
  </div>
</div>
    );
};

export default DashboardNavBar;