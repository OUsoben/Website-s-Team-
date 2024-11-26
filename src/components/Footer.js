import React from 'react';
import "../styles/FooterStyle.css";
import { faClock, faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faFacebook, faSquareInstagram, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    let navigate = useNavigate();
    return (
        <div className='bg-blue'>
            <section className='container text-white py-4'>
                <div className="row justify-content-center pt-3 ">
                    <div className="col-xl-3 pt-4 ">
                        <h5 className='cambo-font'>CamboShop</h5>
                        <p className='pt-4 list-font'>
                            Welcome to MarketShop, your go-to source for quality products and excellent customer service.
                        </p>
                    </div>
                    <div className="col-xl-2 pt-4 font-top ">
                        <p className=''>ABOUT CAMBOSHOP </p>
                        <div className='d-flex flex-column gap-2 pt-3'>
                            <a className='text-white text-decoration-none list-font' role="button" onClick={() => navigate("/blogs")}>Blog</a>
                            <a className='text-white text-decoration-none list-font' role="button" onClick={() => navigate("/aboutus")}>About Us</a>
                            <a className='text-white text-decoration-none list-font' role="button" onClick={() => navigate("/privacypolicy")}>Privacy Policy</a>
                            <a className='text-white text-decoration-none list-font' role="button" onClick={() => navigate("/termsconditions")}>Terms to Use</a>
                            <a className='text-white text-decoration-none list-font' role="button" onClick={() => navigate("/contactus")}>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-xl-3 pt-4 ">

                        <p className='font-top'>OUR CONTACT</p>
                        <div className=''>
                            <p className='pt-3 list-font'>
                                <FontAwesomeIcon className='pe-2 ' icon={faLocationDot} />
                                123 Market Street, Suite 100, Market City, MC 12345
                            </p>
                            <p className='list-font'>
                                <FontAwesomeIcon icon={faPhone} /> (+855) 95-000-190
                            </p>
                            <a className='text-white text-decoration-none list-font' href="mailto:Camboshop@gmail.com">
                                <FontAwesomeIcon className='pe-2' icon={faEnvelope} />
                                camboshop@gmail.com
                            </a>
                            <p className='pt-3 list-font'>
                                <FontAwesomeIcon className='pe-2' icon={faClock} /> Monday — Friday <br /> <span className='ps-4'>8:00am - 6:00pm</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-2  ps-xl-5 d-flex flex-column ">
                    <p className='mt-4 font-top '>FOLLOW US</p>
                    <a className='list-font text-white text-decoration-none'>
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </a>
                            <a className='list-font text-white  text-decoration-none pt-1'>
                            <FontAwesomeIcon icon={faSquareInstagram} /> Instagram
                            </a>
                            <a className='list-font text-white  text-decoration-none pt-1'>
                            <FontAwesomeIcon icon={faYoutube} /> Youtube
                            </a>
                            <a className='list-font text-white  text-decoration-none pt-1'>
                            <FontAwesomeIcon icon={faTelegram} />  Telegram
                            </a>
                    </div>
                    <div className="col-xl-2 pt-4">
                        <p className='font-top'>PAYMENT</p>
                        <div className='d-flex flex-wrap gap-2'>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492" alt=""/>  
                        </div>
                        
                        
                    </div>
                        <p className='mt-3 font-top'>LOGISTICS</p>
                        <div className='d-flex flex-wrap gap-2'>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://cdn.bookmebus.com/uploads/operator/logo/127/profile_operatorLogo_bold.png" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" alt=""/>  
                        </div>
                        <div className="  image-container">
                                <img src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6" alt=""/>  
                        </div>
                        
                        
                    </div>
                    </div>
                   
                </div>
                <hr className='mt-5' />
                <p className=" text-center  mb-0 list-font">
                    © 2024 CamboShop  <span className='px-1 '> | </span>  All Rights Reserved.
                </p>
            </section>
        </div>
    )
}

export default Footer;
