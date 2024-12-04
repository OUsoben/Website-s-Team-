  import React, { useEffect, useState } from 'react';
  import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
  import { NavLink, useNavigate } from 'react-router-dom';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import "../styles/navbarStyle.css"; // Adjust the path if needed
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBell, faHeart } from '@fortawesome/free-regular-svg-icons';
  import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
  import ShoppingCart from './ShoppingCart';
  import SearchTopBar from './SearchTopBar';
  import { faFacebook, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
  

  const ResponsiveNavbar = () => {
  


    const [showShoppingCart, setShowShoppingCart] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState(false)

    const handleCartCloseModal = () => {
      setShowShoppingCart(false);
    };
    const handleSearchCloseModal = () => {
      setShowSearchModal(false);
    };


    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 990);
      };

      // Initial check
      checkScreenSize();

      // Add event listener
      window.addEventListener('resize', checkScreenSize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkScreenSize);
      };
    }, []);

    const offcanvasStyle = isSmallScreen ? { maxWidth: '300px' } : {};

    const navigate = useNavigate()
    return (
      <>
        <Navbar expand="lg" className="mb-3 p-0 sticky-top">
          {/* Modal */}

          <ShoppingCart
            showCartModal={showShoppingCart}
            handleCloseCartForm={handleCartCloseModal}
          />
          <SearchTopBar ShowSearchModal={showSearchModal}
            handleCloseSearchForm={handleSearchCloseModal} />



          <Container fluid>
            
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            
            <Navbar.Offcanvas 
              style={offcanvasStyle}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              className="navbar-dark " // Add this class to apply dark theme on small screens
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
       
      <img style={{width:"50px"}} src={require("../images/camboshoplogo1.png")} alt="" />
      
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body>
                <Nav className="col-11 mx-xl-auto">
                  {/* Primary Navigation Links */}
                  <NavLink className="text-white nav-link px-4 py-4 nav-bar d-none d-lg-inline">
                    <FontAwesomeIcon className='pe-3  ' icon={faBars} />
                    All Categories
                  </NavLink>
                  <NavLink className="text-white nav-bar nav-link px-lg-3 px-xxl-4  py-lg-4 bg-hover py-3" to="/">Home</NavLink>
                  <NavLink className="text-white nav-bar nav-link px-lg-3 px-xxl-4  py-lg-4 bg-hover py-3" to="/blogs">Blog</NavLink>
                  <NavLink className="text-white nav-bar nav-link px-lg-3 px-xxl-4  py-lg-4 bg-hover py-3" to="/categories">Categories</NavLink>
                  <NavLink className="text-white nav-bar nav-link px-lg-3 px-xxl-4  py-lg-4 bg-hover py-3" to="/services">Customer Service</NavLink>
                  <NavLink className="text-white nav-bar nav-link px-lg-3 px-xxl-4  py-lg-4 bg-hover py-3" to="/admin/products">Dashboard</NavLink>
                </Nav>
                <div className='d-lg-block d-lg-none mt-5 d-flex justify-content-center gap-3'>
                <button className='btn btn-primary rounded-pill px-4'
                onClick={()=>{
                  navigate('/signin');
                }}>Sign in</button>
                <button className='btn btn-outline-primary rounded-pill px-4'
                onClick={()=>{
                  navigate('/Signup');
                }}>Rigister</button>
                </div>

              </Offcanvas.Body>  
              <div className='py-4 d-lg-block d-lg-none'>
                    <hr />
                    <p className='fw-bold text-center'>Follow us</p>
                    <div className='d-flex justify-content-center gap-2'>
                    <FontAwesomeIcon icon={faFacebook} color='#4267B2' size='2x'/>  
                    <FontAwesomeIcon icon={faLinkedin} color='#0077B5' size='2x'/>  
                    <FontAwesomeIcon icon={faTelegram} color='	#24A1DE' size='2x'/>     
                    <FontAwesomeIcon icon={faYoutube} color='red' size='2x'/>
                    
                    </div>
                  </div>
            </Navbar.Offcanvas>
          
    
      
            <div className="d-flex me-xl-5 pt-3 pb-3">
              <FontAwesomeIcon className="fs-5 pe-3 d-none d-md-inline" color="white" icon={faBell} />
              <FontAwesomeIcon className="fs-5 pe-3 d-none d-md-inline" color="white" icon={faHeart} />

              <FontAwesomeIcon
                className="fs-5 pe-3 d-md-block d-md-none"
                color="white"
                icon={faMagnifyingGlass}
               onClick={() => {
                  setShowSearchModal(true);

                }} 
              />
              <img className="d-md-block d-md-none me-3" style={{ height: "20px", borderRadius: "50%" }} src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png" alt="" />

              {/* Cart icon that toggles visibility */}
              <div className="icon-container"
                style={{ cursor: 'pointer' }}
              onClick={() => {
                setShowShoppingCart(true);
              }}>
                <FontAwesomeIcon
                
                  className="fs-5 pe-3"
                  color="white"
                  icon={faCartShopping}
                
                />
                <div className="notification-badge">2</div>
              </div>
            </div>
          </Container>
        </Navbar>

        {/* Conditionally render the ShoppingCart component */}

      </>
    );
  };

  export default ResponsiveNavbar;
