import React from 'react';
import { Outlet } from "react-router-dom";
const Login = () => {
    return (

   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col w-[380px]">
    <div className='pb-5'>
        <h1 className='text-5xl font-bold'>Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label text-xl">Email</label>
          <input  type="email" className="input" placeholder="Email" />
          <label className="label text-xl">Password</label>
          <input  type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn text-xl btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>

    );
};

export default Login;