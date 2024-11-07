import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/BlogStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const BlogPage = () => {

  let navigate = useNavigate()
  return (
    <>
      <section style={{fontSize:"15px",marginLeft:"12px"}} className=' d-flex p-md-5 pt-2 '>
        
        <p style={{cursor:"pointer"}} className='text-muted ps-xl-5 font-style hover-home'  
          onClick={()=>{
            // Navigate to Home page
            navigate("/")
          }}
        >Home</p> <p><FontAwesomeIcon style={{width:"30px"}} className=' font-style text-muted'  icon={faAngleRight} /> Blogs</p>
      </section>
      <section>
        <div style={{border:"2px solid red", marginLeft: "7.5vw", marginRight: "7.5vw"}}>
          <div style={{border:"2px solid blue"}}>
            <button type="button" class="btn btn-outline-primary" style={{marginRight: "15px"}}>Design</button>
            <button type="button" class="btn btn-outline-primary" style={{marginRight: "15px"}}>Marketing</button>
            <button type="button" class="btn btn-outline-primary" style={{marginRight: "15px"}}>Sell Online</button>
            <button type="button" class="btn btn-outline-primary" style={{marginRight: "15px"}}>Payments</button>
          </div>
          <div className='d-flex flex-row mb-2'>
            {/* Left card */}
            <div className='d-flex flex-column mb-3 p-2'>
              <img class="img-fluid" src="https://woocommerce.com/wp-content/uploads/2024/09/blog-hero-Business-Models@2x.jpg" alt="Woman, am I right?" />
              <div className='p-2'>caption</div>
              <div className='p-2'>date</div>
              <div className='p-2'>category</div>
            </div>
            <div className='d-flex flex-column mb-3 p-2'>
              <img class="img-fluid" src="https://woocommerce.com/wp-content/uploads/2024/09/blog-hero-Business-Models@2x.jpg" alt="Woman, am I right?" />
              <div className='p-2'>caption</div>
              <div className='p-2'>date</div>
              <div className='p-2'>category</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage