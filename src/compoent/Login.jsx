import React from 'react';
import logo from '../assets/logo.png';
import './logo.css'

const Login = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="w-1/2 p-8">
          <div className="mb-8">
            <div className="logoDiv">
              <img src={logo} alt="Logo" className="w-12 mr-2" />
              <h1 className="logo-text">Logo</h1>
            </div>
            <h1 className="heading">Welcome to FreelanceHu👋</h1>
            <p className="sub-heading">Kindly fill in your details below to create an account</p>
          </div>
          <form>
            <label className="email-head">Email Address</label>
            <input type="email" placeholder="Daphne Smith" className="email-box rounded" />
            <label className="pass-head">Password</label>
            <input type="password" placeholder="**********" 
            className="pass-box rounded" /> 
            <button type="submit" className="btn-box rounded">Register with us</button>
          </form>
        </div>
        <div className="w-1/2 rightSide">
        <div className="right-content">
          <h6 className='right-head'>  Connecting Talent to Opportunities
          </h6>
          <p className='right-para'>
            Discover endless opportunities on FreelanceHu, where talented freelancers and businesses unite. Jump right in with us!
          </p>
        </div>

         </div>
      </div>
    </div>
  );
}

export default Login;
