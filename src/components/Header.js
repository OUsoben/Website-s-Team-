import React, { useState } from 'react'
import "../styles/HeaderStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import SearchTopBar from "./SearchTopBar"




const Header = () => {
    let navigate = useNavigate()

    const [ShowSearchModal,setShowSearchModal] = useState(false)

    const handleSearchCloseModal = () => {
        setShowSearchModal(false);
      };
    return (
   
        <div className='d-none d-md-block pb-2'>
            <SearchTopBar ShowSearchModal={ShowSearchModal}
                          handleCloseSearchForm={handleSearchCloseModal}/>
            <section className='row my-2 me-1 '>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-3 ">
                    <h4 className='pt-3 ps-xl-5   text-center  combo-shop'>Camboshop</h4>
                </div>
                <div class=" col-xxl-8 col-xl-7 mt-2 col-lg-7 col-5">
                    <input
                    style={{cursor: "pointer"}}
                        type="text"
                        class="form-control  button-like"
                        placeholder="Search Product ..."
                        aria-label="Username"
                        aria-describedby=""
                        readonly
                        onClick={()=>{setShowSearchModal(true)}}
                        
                    />
                          <SearchTopBar />
                </div>
                <div className="col-xxl-2 p-2 col-xl-3 ps-lg-3 col-lg-3 col-4 ">
                     <div className="d-flex gap-4 pt-2 justify-content-center">
                        <div  className='fs-5 click-cursor '> <FontAwesomeIcon className='' icon={faGlobe} /> <span className='list-font'>English</span> </div> 
                        <div className='fs-5 click-cursor'  onClick={()=>{
                             // navigate to sign in page
                             navigate("/signin");
                         }}> <FontAwesomeIcon className='' icon={faUserCircle} /> <span style={{color:"blue"}}  className=' list-font'>Sign in</span></div>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default Header