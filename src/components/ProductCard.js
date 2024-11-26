import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import "../styles/productCardStyle.css"
import SearchTopBar from "./ShoppingCart"
import ShoppingCart from './ShoppingCart';




const ProductCard = ({ productData }) => {
  const navaigate = useNavigate();
  
  const [showShoppingCart, setShowShoppingCart] = useState(false)

  
  const handleCartCloseModal = () => {
    setShowShoppingCart(false);
  };
  return (
    <div>
       <ShoppingCart
            showCartModal={showShoppingCart}
            handleCloseCartForm={handleCartCloseModal}
          />
      <Row noGutters>
        <Col className="p-0 ">
          <Card className="product-card " >
            <Card.Img variant="none" className="product-image" src={productData.images[0]}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'
              }}
              onClick={() => {
                navaigate(`/products/${productData.id}`)
              }}
            />
            <Card.Body className="">
              <Card.Title className="mb-1 text-truncate" style={{ fontSize: '0.9rem' }}>{productData.title}</Card.Title>
              <Card.Text className="mb-2 text-truncate  " style={{ fontSize: '0.9rem' }}>${productData.price}</Card.Text>
              <div className='d-flex justify-content-end '>
                <Button className='circle-button border' size="sm"
                   onClick={() => {
                    setShowShoppingCart(true);
                  }}>
                <FontAwesomeIcon icon={faCartShopping} /></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default ProductCard;