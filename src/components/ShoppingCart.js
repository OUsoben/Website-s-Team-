import React, { useState } from 'react';
import { Button, Offcanvas, ListGroup, Image, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import '../styles/ShoppingCartStyle.css';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart({ props ,showCartModal,handleCloseCartForm}) {



  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Hoodie',
      code: '1220',
      qty: 1,
      price: 16.16,
      image: 'https://perplex.store/cdn/shop/files/1000113-ArmorHoodieNovember_01.jpg?v=1728915708&width=1080',
    },
    {
      id: 2,
      name: 'Samba OG',
      code: '1221',
      qty: 1,
      price: 120.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2mjdVvmN0IfkiDdmjsVGAiu0p186nXNsLQ&s',
    },
  ]);



  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    return total.toFixed(2);
  };

  const handleCloseCart = () => {
    handleCloseCartForm(false);
  };

  return (
    <>


      <Offcanvas show={showCartModal} onHide={handleCloseCart} placement="end" {...props}>

        <div className="d-flex justify-content-between align-items-center px-4 pt-3">
          <button type="button" className="btn-close" onClick={handleCloseCart}  aria-label="Close"></button>
          <h4 className="">Shopping Cart</h4>
          <FontAwesomeIcon className='fs-5' icon={faHeart} />

        </div>
        <hr />
        <Offcanvas.Body>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item className='py-3' key={item.id}>
                <Row >
                  <Col xs={6}>
                    <div className="image-container-shopping-cart">
                      <Image src={item.image} rounded fluid />
                    </div>

                  </Col>
                  <Col>
                    <p className='text-truncate fw-bolder'>{item.name}</p>
                    <p style={{ fontSize: "14px" }}>
                      Code: <sup className='text-primary'>{item.code}</sup>
                    </p>
                    <p>
                      Qty:
                      <select
                        value={item.qty}
                        onChange={(e) => {
                          const updatedQty = parseInt(e.target.value, 10);
                          setCartItems((prevCartItems) =>
                            prevCartItems.map((cartItem) =>
                              cartItem.id === item.id ? { ...cartItem, qty: updatedQty } : cartItem
                            )
                          );
                        }}
                        style={{
                          marginLeft: '5px',
                          padding: '2px',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                          fontSize: '14px',
                        }}
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                    </p>

                    <p style={{ fontSize: "14px" }} className='text-danger'>US: ${item.price}</p>
                    <p style={{ fontSize: "14px" }}> <FontAwesomeIcon icon={faHeart} /> move to wishlist</p>
                  </Col>
                  <Col xs={1}>
                    <FontAwesomeIcon style={{ cursor: "pointer" }} icon={faTrash} size="md" onClick={() => handleRemoveItem(item.id)} />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

        </Offcanvas.Body>
        <div className="cart-summary p-3 bg-white ">
          <p className='d-flex justify-content-between'>Total: <span> ${calculateTotal()}</span></p>
          <p className='d-flex justify-content-between'>Save: <span>$0</span></p>
          <p className='d-flex justify-content-between'>Delivery Fee: <span>$1.5</span></p>
          <p className='d-flex justify-content-between'>Amount to pay: <span>${(parseFloat(calculateTotal()) + 1.5).toFixed(2)}</span></p>
          <Button variant="dark" className="w-100">Proceed to Checkout</Button>
        </div>
      </Offcanvas>

    </>
  );
}

export default ShoppingCart;
