import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/SignInStyle.css"
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
  let navigate = useNavigate()
  return (
    <>
     <h1>SignInPage</h1>
     <button className='btn btn-danger ms-5'
       onClick={()=>{
         navigate('/signup')
       }}
     >Sign Up Page Here</button>
    </>
  )
}

export default SignInPage