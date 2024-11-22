import React, { useState } from 'react';
import { Offcanvas, Container, Row, Col, Button, Form, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/SearchTopBar.css'; // Add your CSS for styling


const TopBar = ({ShowSearchModal,handleCloseSearchForm}) => {
      
  const handleCloseSearch = ()=>{
        handleCloseSearchForm(false)
  }
  return (
    <div >
      <Offcanvas show={ShowSearchModal} onHide={handleCloseSearch}  placement="top">
        <div style={{}} className="d-flex justify-content-between align-items-center px-4 ">
          <Button variant="link" className="back-button" onClick={handleCloseSearch}>
            <FontAwesomeIcon style={{ fontSize: "15px" }} icon={faArrowLeft} />
          </Button >
          <div className="search-input-container pt-4">
            <input
              type="text"
              placeholder="What are you looking for ..."
              className="mb-4  search-input"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />

          </div>
        </div>

        <Offcanvas.Body className='px-xxl-5'>
          <div className='ps-xxl-5 px-3'>
            <div className="recent-searches">
              <p>Recent Searches</p>
              <div className='d-flex  gap-2  flex-md-row'>
                <button className="recent-item btn rounded-pill">
                  <span>MSI GL63</span>
                  <span className="remove-search"> ✖</span>
                </button>
                <button className="recent-item btn rounded-pill d-none d-md-inline">
                  <span>Gaming accessories</span>
                  <span className="remove-search"> ✖</span>
                </button>
                <button className="recent-item btn rounded-pill d-none d-md-inline">
                  <span>Regular T-Shirt</span>
                  <span className="remove-search"> ✖</span>
                </button>
                <button className="recent-item btn rounded-pill d-none d-md-inline">
                  <span>Kitchen and dining products</span>
                  <span className="remove-search"> ✖</span>
                </button>
                <button className="recent-item btn rounded-pill">
                  <span>Keyboard</span>
                  <span className="remove-search"> ✖</span>
                </button>
              </div>
            </div>

            <div className="popular-items mt-3">
              <p>Popular Items</p>
              <Row>
                <Col xs={6} sm={6} md={6} lg={3} className="popular-item">
                  <Image
                    src="https://st3.depositphotos.com/9747634/32010/i/450/depositphotos_320104748-stock-photo-hangers-with-different-clothes-in.jpg"
                    alt="Product"
                    
                    fluid
                    className="item-image"
                  />
                  <p>Clothing</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={3}  className="popular-item">
                  <Image
                    src="https://t3.ftcdn.net/jpg/02/71/05/60/360_F_271056073_C0tbpNLFbcGurqxoMXqPBrx8vzL9VLVY.jpg"
                    alt="Product"
                  
                    fluid
                    className="item-image"
                  />
                  <p>Furniture</p>
                </Col>
                <Col  xs={6} sm={6} md={6} lg={3}  className="popular-item">
                  <Image 
                    src="https://cdn.prod.website-files.com/628dbef9063b143b9ba59b90/65a1bb5ceb78c0aef80fbbdc_Screenshot%202024-01-12%20at%202.20.45%E2%80%AFPM.png"
                    alt="Product"
                
                    fluid
                    className="item-image"
                  />
                  <p>Skincare</p>
                </Col>
                <Col xs={6} sm={6} md={6} lg={3}  className="popular-item">
                  <Image
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Product"
                    
                    fluid
                    className="item-image"
                  />
                  <p>Electronics</p>
                </Col>
              </Row>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default TopBar;
