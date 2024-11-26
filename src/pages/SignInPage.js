import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import "../styles/SignInStyle.css";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
const SignInPage = () => {
  let navigate = useNavigate()
  return (
    <>
       <section style={{fontSize:"15px",marginLeft:"12px"}} className=' d-flex p-md-5 pt-2 '>
         
         <p style={{cursor:"pointer"}} className='text-muted ps-xl-5 font-style hover-home'  
           onClick={()=>{
             // Navigate to Home page
              navigate("/")
           }}
         >Home</p> <p><FontAwesomeIcon style={{width:"30px"}} className=' font-style text-muted'  icon={faAngleRight} /> Sign In</p>
      </section>
      <div className="container d-flex justify-content-xxl-start justify-content-center align-items-center pb-5 mb-5">
      <div className="image-section d-none d-xl-inline">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="Login illustration" />
      </div>
      <div className="login-form">

        <div className="welcome-back text-primary">Welcome back</div>
        <div className="description">
          Change your preferences, review and track orders, get service and more.
        </div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Email or mobile phone number" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/" style={{ float: 'right' }}>Forgot password?</a>
          </div>
          <button type="submit" className="login-btn">Log in</button>
        </form>
        <div className="or-container">
            <div className="or-line"></div>
            <div className="or">OR</div>
            <div className="or-line"></div>
          </div>
        <div className="social-login" onClick={() => { /* Handle Google login */ }}>
        <FontAwesomeIcon className='pe-3' icon={faGoogle} /> Continue with Google
        </div>
        <div className="social-login" onClick={() => { /* Handle Facebook login */ }}>
          <FontAwesomeIcon className='pe-3' icon={faFacebook} /> Continue with Facebook
        </div>
        <div className="register-link">
          Don’t have an account? <a className='' color='blue' style={{cursor:"pointer"}} onClick={()=>{
             // Navigate to Sign Up page
             navigate("/signup")
            }} > Register Here</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignInPage