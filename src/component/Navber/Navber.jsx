import React from 'react';
import { NavLink } from 'react-router';
import { MdOutlinePets } from "react-icons/md";
const Navber = () => {
    return (
 <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ">
    <div className="dropdown pl-10">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    </div>
    <a className="btn btn-ghost text-xl"><span><MdOutlinePets /></span>Pet-Dog</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/services">Services</NavLink></li>
      <li><a>My Profile</a></li>
    </ul>
  </div>
  <div className="navbar-end pr-10">
    <NavLink to='/login'>Login</NavLink>
  </div>
</div>
    );
};

export default Navber;