import React from 'react'
import "../styles/HeaderStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'




const Header = () => {
    let navigate = useNavigate()
    return (
        <div className='d-none d-md-block'>
            <section className='row my-1 mt-3 me-1 '>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-3">
                    <h4 className='p-3 text-center '>Camboshop</h4>
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
                <div className="col-xxl-2 p-2 col-xl-3 ps-lg-3 col-lg-3 col-4">
                     <div className="d-flex ">
                        <button  className='btn fw-bolder '> <FontAwesomeIcon className='' icon={faEarthAmericas} /> English </button> 
                        <button className='btn fw-bolder'   onClick={()=>{
                             // navigate to sign in page
                             navigate("/signin");
                         }}> <FontAwesomeIcon icon={faUser} 
    
                        /> Sign in</button>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default Header