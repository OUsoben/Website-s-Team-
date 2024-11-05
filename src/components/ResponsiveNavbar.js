import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/navbarStyle.css"; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ResponsiveNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="mb-3 p-0">
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            className="navbar-dark" // Add this class to apply dark theme on small screens
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='' id="offcanvasNavbarLabel">CamboShop</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="col-11 mx-xl-auto">
                {/* Primary Navigation Links */}
                <NavLink className=" text-white nav-link   px-4 py-3 ">
                  <FontAwesomeIcon className='pe-3' icon={faBars} />
                  All Categories</NavLink>
                <NavLink className=" text-white nav-link px-4 py-3 bg-hover" to="/">Home</NavLink>
                <NavLink className=" text-white nav-link px-4 py-3 bg-hover" to="/blogs">Blog</NavLink>
                <NavLink className=" text-white nav-link px-4 py-3 bg-hover" to="/categories">Categories</NavLink>
                <NavLink className=" text-white nav-link px-4 py-3 bg-hover" to="/services">Customer  Service</NavLink>
                <NavLink className=" text-white nav-link px-4 py-3 bg-hover" to="/dashboard">Dashboard</NavLink>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className='d-flex  me-xl-5 pt-3 pb-3'>
            <FontAwesomeIcon className='fs-5 pe-3' color='white' icon={faBell} />
            <FontAwesomeIcon className='fs-5 pe-3' color='white' icon={faHeart} />
            <FontAwesomeIcon className='fs-5 pe-3' color='white' icon={faCartShopping} />
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default ResponsiveNavbar;
