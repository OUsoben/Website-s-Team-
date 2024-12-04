import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import "../styles/productCardStyle.css";
import ShoppingCart from './ShoppingCart';

const ProductCard = ({ productData }) => {


  console.log("the product that we gain :", )
  const navigate = useNavigate();
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleCartCloseModal = () => {
    setShowShoppingCart(false);
  };

  // Parse the images array if it's stringified JSON
  let productImages = [];
  try {
    productImages = JSON.parse(productData.images[0]);
  } catch (e) {
    console.error("Error parsing product images:", e);
  }

  return (
    <div>
      <ShoppingCart
        showCartModal={showShoppingCart}
        handleCloseCartForm={handleCartCloseModal}
      />
      <Row className="no-gutters">
        <Col className="p-0">
          <Card className="product-card">
            <Card.Img 
              variant="top" 
              className="product-image" 
              src={productImages[0] || 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg';
              }}
              onClick={() => {
                navigate(`/products/${productData.id}`);
              }}
            />
            <Card.Body>
              <Card.Title className="mb-1 text-truncate" style={{ fontSize: '0.9rem' }}>
                {productData.title}
              </Card.Title>
              <Card.Text className="mb-2 text-truncate" style={{ fontSize: '0.9rem' }}>
                ${productData.price}
              </Card.Text>
              <div className='d-flex justify-content-end'>
                <Button className='circle-button border' size="sm"
                  onClick={() => {
                    setShowShoppingCart(true);
                  }}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
