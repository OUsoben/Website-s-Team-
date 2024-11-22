import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/SignUpStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

const SignUpPage = () => {
  let navigate = useNavigate()
  return (
    <>
      <section style={{ fontSize: "15px", marginLeft: "12px" }} className=' d-flex p-md-5 pt-2 '>

        <p style={{ cursor: "pointer" }} className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            // Navigate to Home page
            navigate("/")
          }}
        >Home</p> <p><FontAwesomeIcon style={{ width: "30px" }} className=' font-style text-muted' icon={faAngleRight} /> Sign up</p>
      </section>
      <div className="container d-flex justify-content-xxl-start justify-content-center align-items-center pb-5 mb-5">
        <div className="image-section d-none d-xl-inline">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="Login illustration" />
        </div>
        <div className="login-form">

          <div className="welcome-back text-primary">Create Account</div>
      
          <form>
            <div className="form-group d-flex gap-3">
              <input type="text" className="form-control" placeholder="First Name" />
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <input type="date" className="form-control" placeholder="Date of birth(dd//mm//yyyy)" />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Email or mobile phone number" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
            </div>
            <button type="submit" className="login-btn">Create Account</button>
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
          
        </div>
      </div>
    </>
  )
}

export default SignUpPage