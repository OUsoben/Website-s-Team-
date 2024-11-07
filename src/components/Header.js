import React from 'react'
import "../styles/HeaderStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'




const Header = () => {
    let navigate = useNavigate()
    return (
        <div className='d-none d-md-block pb-2'>
            <section className='row my-2 me-1 '>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-3 ">
                    <h4 className='pt-3 ps-xl-5   text-center  cambo-font'>Camboshop</h4>
                </div>
                <div class=" col-xxl-8 col-xl-7 mt-2 col-lg-7 col-5">
                    <input
                        type="text"
                        class="form-control button-like"
                        placeholder="Search Product ..."
                        aria-label="Username"
                        aria-describedby=""
                        readonly
                    />
                </div>
                <div className="col-xxl-2 p-2 col-xl-3 ps-lg-3 col-lg-3 col-4 ">
                     <div className="d-flex gap-4 pt-2 justify-content-center">
                        <div  className='fs-5 click-cursor '> <FontAwesomeIcon className='' icon={faGlobe} /> <span className='side-left-font'>English</span> </div> 
                        <div className='fs-5 click-cursor'  onClick={()=>{
                             // navigate to sign in page
                             navigate("/signin");
                         }}> <FontAwesomeIcon className='' icon={faUserCircle} /> <span  className='text-primary side-left-font'>Sign in</span></div>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default Header