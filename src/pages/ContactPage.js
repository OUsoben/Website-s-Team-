import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/ContactStyle.css"
import { faAngleRight, faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
  let navigate = useNavigate()
  return (
    <>
        <section style={{fontSize:"15px",marginLeft:"12px"}} className=' d-flex p-md-5  pt-2 '>
         
         <p style={{cursor:"pointer"}} className='text-muted ps-xl-5 font-style hover-home'  
           onClick={()=>{
             // Navigate to Home page
              navigate("/")
           }}
         >Home</p> <p><FontAwesomeIcon style={{width:"30px"}} className=' font-style text-muted'  icon={faAngleRight} /> Contact Us</p>
      </section>
           
           <section className='py-5'>
           <div className='  d-flex  mx-2  flex-column flex-xl-row justify-content-start  justify-content-md-center  pb-5'>
              <div className=' ps-xxl-5 ms-xxl-5  col-xxl-5 '>
                <h4>Our Contact</h4>
                <div className='ps-3'>
                            <p className='pt-3 des-font'>
                                <FontAwesomeIcon className='pe-2 ' icon={faLocationDot} />
                                123 Market Street, Suite 100, Market City, MC 12345
                            </p>
                            <p className='des-font'>
                                <FontAwesomeIcon icon={faPhone} /> (+855) 95-000-190
                            </p>
                            <a className='text-dark text-decoration-none des-font' href="mailto:Camboshop@gmail.com">
                                <FontAwesomeIcon className='pe-2' icon={faEnvelope} />
                                camboshop@gmail.com
                            </a>
                            <p className='pt-3 des-font'>
                                <FontAwesomeIcon className='pe-2' icon={faClock} /> Monday — Friday <br /> <span className='ps-4'>8:00am - 6:00pm</span>
                            </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.772962317763!2d104.88949521191553!3d11.568127044041972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRoyal%20University%20of%20Phnom%20Penh!5e0!3m2!1sen!2skh!4v1732185210409!5m2!1sen!2skh" width="100%" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
              </div>
              <div className='  col-xl-5 ps-xxl-5 ms-md-5 pt-4 '>
              <h5>Contact Form</h5>
              <form className='d-flex flex-column '>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                    
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                    
                    <label for="message">Message</label>
                    <textarea style={{height:"120px"}} id="message" name="message" required></textarea>
                    <button className='btn btn-primary' type='submit'>Sand Message</button> 
                </form>
            
                
              </div>
           </div>

           </section>

    </>
  )
}

export default ContactPage