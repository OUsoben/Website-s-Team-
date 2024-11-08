import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/BlogStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const BlogPage = () => {

  let navigate = useNavigate()
  return (
  
    <>
<<<<<<< HEAD
        <section style={{fontSize:"15px",marginLeft:"12px"}} className=' d-flex p-md-5 pt-2 '>
         
         <p style={{cursor:"pointer"}} className='text-muted ps-xl-5 font-style hover-home'  
           onClick={()=>{
             // Navigate to Home page
              navigate("/")
           }}
         >Home</p> <p><FontAwesomeIcon style={{width:"30px"}} className=' font-style text-muted'  icon={faAngleRight} /> Blogs</p>
      </section>
=======
    
        <button className='btn btn-danger'>Sign up</button>
        <p className='text-warning border-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam assumenda suscipit facilis dolore! Dicta ullam saepe ab id ea aperiam expedita, vitae eos, doloribus quasi facilis quia illum ratione?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dolore praesentium. Asperiores ipsa inventore architecto voluptatibus in excepturi esse eum. Blanditiis at dolor nulla sint recusandae nostrum adipisci culpa quod.</p>
>>>>>>> origin/team
    </>
  )
}

export default BlogPage