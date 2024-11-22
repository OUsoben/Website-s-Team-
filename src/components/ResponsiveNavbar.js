import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/navbarStyle.css"; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from './ShoppingCart';
import SearchTopBar from './SearchTopBar';
const ResponsiveNavbar = () => {

  
  const [showShoppingCart,setShowShoppingCart] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)

  const handleCartCloseModal = () => {
    setShowShoppingCart(false);
  };
  const handleSearchCloseModal = () => {
    setShowSearchModal(false);
  };

  return (
    <>
      <Navbar expand="lg" className="mb-3 p-0 sticky-top">

     {/* Modal */}

        <ShoppingCart  
          showCartModal={showShoppingCart}
          handleCloseCartForm={handleCartCloseModal}
                     />
           <SearchTopBar ShowSearchModal={showSearchModal}
                          handleCloseSearchForm={handleSearchCloseModal}/>



        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="navbar-dark" // Add this class to apply dark theme on small screens
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">CamboShop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="col-11 mx-xl-auto">
                {/* Primary Navigation Links */}
                <NavLink className="text-white nav-link px-4 py-3">
                  <FontAwesomeIcon className='pe-3' icon={faBars} />
                  All Categories
                </NavLink>
                <NavLink className="text-white nav-link px-4 py-3 bg-hover" to="/">Home</NavLink>
                <NavLink className="text-white nav-link px-4 py-3 bg-hover" to="/blogs">Blog</NavLink>
                <NavLink className="text-white nav-link px-4 py-3 bg-hover" to="/categories">Categories</NavLink>
                <NavLink className="text-white nav-link px-4 py-3 bg-hover" to="/services">Customer Service</NavLink>
                <NavLink className="text-white nav-link px-4 py-3 bg-hover" to="/dashboard">Dashboard</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <a style={{fontSize:"20px"}} class="navbar-brand text-white text-center combo-shop d-md-block d-md-none  ms-3" >CamboShop</a>

          <div className="d-flex me-xl-5 pt-3 pb-3">
            <FontAwesomeIcon className="fs-5 pe-3 d-none d-md-inline" color="white" icon={faBell} />
            <FontAwesomeIcon className="fs-5 pe-3 d-none d-md-inline" color="white" icon={faHeart} />
            
            <FontAwesomeIcon
              className="fs-5 pe-3 d-md-block d-md-none"
              color="white"
              icon={faMagnifyingGlass}
              onClick={()=>{
                setShowSearchModal(true);
    
          }}
            />
            <img className="d-md-block d-md-none me-3" style={{height:"20px",borderRadius:"50%"}} src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-square-250.png" alt="" />

            {/* Cart icon that toggles visibility */}
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              className="fs-5 pe-3"
              color="white"
              icon={faCartShopping}
              onClick={()=>{
                    setShowShoppingCart(true);
              }}
            />
          </div>
        </Container>
      </Navbar>

      {/* Conditionally render the ShoppingCart component */}
  
    </>
  );
};

export default ResponsiveNavbar;
