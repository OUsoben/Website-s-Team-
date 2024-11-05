import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/AboutUsStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const AboutUsPage = () => {
  let navigate = useNavigate();
  return (
    <>
    <section style={{fontSize:"15px",marginLeft:"12px"}} className=' d-flex p-md-5 pt-2 '>
         
         <p style={{cursor:"pointer"}} className='text-muted ps-xl-5 font-style hover-home'  
           onClick={()=>{
             // Navigate to Home page
              navigate("/")
           }}
         >Home</p> <p><FontAwesomeIcon style={{width:"30px"}} className=' font-style text-muted'  icon={faAngleRight} /> About Us</p>
      </section>
    </>
  )
}

export default AboutUsPage