import React from 'react'
import "../styles/FooterStyle.css"
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
    let navigate = useNavigate();
    return (
        <>

            <section style={{marginRight:"1px"}} className='row  bg-blue  text-white p-4  '>
                <div className="col-xl-4  pt-4 ">
                    <h2>CamboShop</h2>
                    <p className='pt-4'>Welcome to the CamboShop of market shops, where desires meet discovery and every aisle is an adventure waiting to unfold. These vibrant spaces, whether nestled on your local street corner or seamlessly integrated into the digital realm, are the heartbeat of commerce.</p>
                </div>
                <div className="col-xl-2  pt-4 ">
                    <h5 className='fw-bold'>Get to Know Us</h5>
                    <div className='d-flex flex-column gap-2 pt-3'>
                        <a className='text-white text-decoration-none ' onClick={() => {
                            navigate("/blog")
                        }}>Blog</a>
                        <a className='text-white text-decoration-none ' onClick={() => {
                            navigate("/aboutus")
                        }}>About Us</a>
                        <a className='text-white text-decoration-none ' onClick={() => {
                            navigate("/privacypolicy")
                        }}>Privacy Policy</a>
                        <a className='text-white text-decoration-none ' onClick={() => {
                            navigate("/termsconditions")
                        }}>Terms to Use</a>
                        <a className='text-white text-decoration-none ' onClick={() => {
                            navigate("/contactus")
                        }}>Contact Us</a>
                    </div>
                </div>
                <div className="col-xl-3  pt-4 ">
                    <h5 className='fw-bold'>Our Contect</h5>
                    <p className='pt-3'><FontAwesomeIcon className='pe-2' icon={faLocationDot} />
                        #01, Street 86k Phum Chak Jruk Tboung,Sangkat Somrong Krom, Khan Porsenchey, Phnom Penh, Cambodia</p>
                    <p ><FontAwesomeIcon icon={faPhone} /> (+855) 95-000-190
                    </p>
                    <a className='text-white text-decoration-none' href=""> <FontAwesomeIcon className='pe-2' icon={faEnvelope} />
                        Camboshop@gmail.com</a>
                    <p className='pt-3'><FontAwesomeIcon className='pe-2' icon={faClock} />Monday — Friday <br /> <span className='ps-4'>8:00am - 6:00pm</span></p>
                </div>

                <div className="col-xl-3 pt-4 ">
                    <h5 className='fw-bold'>Follow Us</h5>
                    <div className="d-flex mt-3 gap-2">
                        <img className='img-fluid' style={{ width: "40px", height: "40px" }} src="https://freepnglogo.com/images/all_img/facebook-logo.png" alt="" />
                        <img className='img-fluid' style={{ width: "40px", height: "40px" }} src="https://d3uz6obq3251t9.cloudfront.net/media/wysiwyg/images/X-icon.webp" alt="" />
                        <img style={{ width: "40px", height: "40px" }} className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="" />
                        <img style={{ width: "40px", height: "40px" }} className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" alt="" />
                        <img style={{ width: "40px", height: "40px" }} className='img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" />

                    </div>
                    <h5 className='fw-bold mt-4'>Payment Partners</h5>
                    <div className="d-flex mt-3  gap-2">
                        <img className='img-fluid' style={{ width: "50px", height: "20px" }} src="https://e7.pngegg.com/pngimages/651/814/png-clipart-logo-visa-credit-card-wordmark-atm-card-visa-blue-text.png" alt="" />
                        <img src="https://d3uz6obq3251t9.cloudfront.net/static/frontend/Visionet/iShopping/en_US/images/master-card.png" alt="" />
                        <img src="https://d3uz6obq3251t9.cloudfront.net/static/frontend/Visionet/iShopping/en_US/images/jazz-cash.png" alt="" />
                        <img src="https://d3uz6obq3251t9.cloudfront.net/static/frontend/Visionet/iShopping/en_US/images/easypaisa.png" alt="" />

                    </div>

                </div>
               <hr className='mt-5' />
               <div className="  text-white   row ms-1">
        <p style={{whiteSpace: "pre"}} className="col-xl-6 text-xl-start  text-center  ">
         © 2024 F U A G E T  |  All Rights Reserved.     
        </p>
        <p className="col-xl-6 text-xl-end   text-xl-end text-center ">Developed by : Web Development Team</p>
      </div>
            </section>
        </>
    )
}

export default Footer