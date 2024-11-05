import React from 'react';
import "../styles/FooterStyle.css";
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    let navigate = useNavigate();
    return (
        <div className='bg-blue'>
            <section className='container text-white py-4'>
                <div className="row justify-content-center ">
                    <div className="col-xl-4 pt-4 ">
                        <h2>CamboShop</h2>
                        <p className='pt-4'>
                            Welcome to the CamboShop of market shops, where desires meet discovery and every aisle is an adventure waiting to unfold. These vibrant spaces, whether nestled on your local street corner or seamlessly integrated into the digital realm, are the heartbeat of commerce.
                        </p>
                    </div>
                    <div className="col-xl-2 pt-4 ">
                        <h5 className='fw-bold'>Get to Know Us</h5>
                        <div className='d-flex flex-column gap-2 pt-3'>
                            <a className='text-white text-decoration-none' role="button" onClick={() => navigate("/blogs")}>Blog</a>
                            <a className='text-white text-decoration-none' role="button" onClick={() => navigate("/aboutus")}>About Us</a>
                            <a className='text-white text-decoration-none' role="button" onClick={() => navigate("/privacypolicy")}>Privacy Policy</a>
                            <a className='text-white text-decoration-none' role="button" onClick={() => navigate("/termsconditions")}>Terms to Use</a>
                            <a className='text-white text-decoration-none' role="button" onClick={() => navigate("/contactus")}>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-xl-3 pt-4">
                        <h5 className=''>Our Contact</h5>
                        <p className='pt-3'>
                            <FontAwesomeIcon className='pe-2' icon={faLocationDot} />
                            #01, Street 86k Phum Chak Jruk Tboung, Sangkat Somrong Krom, Khan Porsenchey, Phnom Penh, Cambodia
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} /> (+855) 95-000-190
                        </p>
                        <a className='text-white text-decoration-none' href="mailto:Camboshop@gmail.com">
                            <FontAwesomeIcon className='pe-2' icon={faEnvelope} />
                            Camboshop@gmail.com
                        </a>
                        <p className='pt-3'>
                            <FontAwesomeIcon className='pe-2' icon={faClock} /> Monday — Friday <br /> <span className='ps-4'>8:00am - 6:00pm</span>
                        </p>
                    </div>
                    <div className="col-xl-3 pt-4">
                        <h5 className=''>Follow Us</h5>
                        <div className="d-flex mt-3 gap-2">
                            <img className='img-fluid' style={{ width: "40px", height: "40px" }} src="https://freepnglogo.com/images/all_img/facebook-logo.png" alt="Facebook Logo" />
                            <img className='img-fluid' style={{ width: "40px", height: "40px" }} src="https://d3uz6obq3251t9.cloudfront.net/media/wysiwyg/images/X-icon.webp" alt="X Logo" />
                            <img className='img-fluid' style={{ width: "40px", height: "40px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram Logo" />
                            <img className='img-fluid' style={{ width: "40px", height: "40px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" alt="Telegram Logo" />
                        </div>
                        <h5 className=' mt-4 '>Payment Partners</h5>
                        <div className="d-flex  mt-3 gap-1 ">
                            <img style={{ width: "60px" }} className='bg-white' src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="Payment Partner 1" />
                            <img style={{ width: "60px" }} className='bg-white' src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="Payment Partner 2" />
                        </div>
                    </div>
                </div>
                <hr className='mt-5' />
                <p className=" text-center  mb-0">
                        © 2024 CamboShop  |  All Rights Reserved.
                    </p>
            </section>
        </div>
    )
}

export default Footer;
