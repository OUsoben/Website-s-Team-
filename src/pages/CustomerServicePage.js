import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/ServiceStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const CustomerServicePage = () => {
  let navigate = useNavigate()
  return (
    <>
    
    <section style={{fontSize:"15px",marginLeft:"12px"}} className=' d-flex p-md-5 pt-2 '>
         
         <p style={{cursor:"pointer"}} className='text-muted ps-xl-5 font-style hover-home'  
           onClick={()=>{
             // Navigate to Home page
              navigate("/")
           }}
         >Home</p> <p><FontAwesomeIcon style={{width:"30px"}} className=' font-style text-muted'  icon={faAngleRight} /> Customer Service</p>
      </section>
      <section>
        <div className="bg-grey  col-12 col-lg-5">
          <div className="bg-red col-12 col-md-8 rounded p-3">
            <h3 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vel eos, eveniet ex ipsam totam ab animi nobis.</h3>
          </div>
          <div className="bg-red text-right rounded p-3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quae enim odit ea dicta aspernatur nihil dolore,.</p>
          </div>
          <button type="button" class="btn btn-success">Success</button>
          <div className=""></div>
        </div>
      </section>
    </>
  )
}

export default CustomerServicePage