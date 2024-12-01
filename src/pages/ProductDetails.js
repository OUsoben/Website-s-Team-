import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ALL_PRODUCT_BY_ID } from '../services/productService';
import '../styles/ProductDetailStyle.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ProductDetailPlaceHolder from '../components/ProductDetailPlaceHolder';

const ProductDetails = () => {
  const Relatedproducts = [
    {
      id: 1,
      name: "Mac book",
      price: "$1600.00",
      image: "https://www.istudiobyspvi.com/cdn/shop/files/MacBook_Air_15_in_M3_Space_Gray_PDP_Image_Position_1__GBEN_b1e11b41-0d9d-4de4-af66-55f8c0992a1d.jpg?v=1718120225&width=1445"
    },
    {
      id: 2,
      name: "Nike women dunk low NN",
      price: "$120.12",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Di1aEcBmaTPvMGEef25g12vdbnX_5yCLCAPf7Xfwm2TJEa3lg8eJnOLgEVjlGlq4K4U&usqp=CAU"
    },
    {
      id: 3,
      name: "Smart Tv",
      price: "$800.00",
      image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/jioretailer/products/pictures/item/free/original/eYeIBBxuzX-bpl-32-hd-television-492166140-i-1-1200wx1200h.jpeg"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "$120.00",
      image: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/a5087da6-0d39-46e5-becb-f92bb1ac2f0d.__CR0,0,362,453_PT0_SX362_V1___.jpg"
    },
    {
      id: 5,
      name: "Iphone 16 pro",
      price: "$1220.00",
      image: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_white_titanium_pdp_image_position_1__gben_1_1_1_1.png"
    },
    {
      id: 6,
      name: "Tablet ",
      price: "$660.00",
      image: "https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/J64tF3CLIi4ZFOaS6wv3VTyLXdmLZ4qD0cJPrFet.png"
    },
    {
      id: 7,
      name: "SONY headphones",
      price: "$520.00",
      image: "https://sony.scene7.com/is/image/sonyglobalsolutions/360-RA-category-icon-20221202?$S7Product$&fmt=png-alpha"
    },
    {
      id: 8,
      name: "Micro waves",
      price: "$220.00",
      image: "https://www.voltasbeko.com/media/catalog/product/m/c/mc23bsd_1.png"
    },
    {
      id: 9,
      name: "Zanba adidas shose ",
      price: "$120.00",
      image: "https://www.nightmarket.ph/cdn/shop/files/IMG-9987.jpg?v=1696918178&width=1024"
    },
    {
      id: 10,
      name: "OverSize t-shirt",
      price: "$12.00",
      image: "https://veirdo.in/cdn/shop/files/Artboard8.png?v=1724158576"
    },
    {
      id: 11,
      name: "Beauty Products",
      price: "$25.00",
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 12,
      name: "Apple Magic mouse",
      price: "$20.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbECnM89dsB5XcAhRigwSVJLaehymb9z-7hs3HnkDoWuRdx5E2s9f50qTUemzrmp3LC8&usqp=CAU"
    },
    // Add more products as needed
  ];

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    GET_ALL_PRODUCT_BY_ID(id).then(
      response => {
        console.log("Product By ID: ", response);
        setProduct(response);
        // Set default selected image to the first image
        if (response && response.images && response.images.length > 0) {
          setSelectedImage(response.images[0]);
        }
      }
    ).catch(
      error => {
        console.log("Error getting product", error);
      });
  }, [id]);

  if (!product) {
    return <div>
       <ProductDetailPlaceHolder/>
      </div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  return (
    <>
    
      <div className="container my-5 flex-column flex-xxl-row d-flex details-product">
  
        <div className="slider-image col-lg-12 col-xxl-6 d-flex justify-content-center flex-column align-items-center gap-3">
          {/* Main image display */}
          <div
            className="image-wrapping position-relative img-fluid"
            style={{ width: "400px", height: "400px", overflow: "hidden" }}
          >
            <img
              className="img-fluid rounded-3 position-absolute top-0 left-0 object-fit-cover"
              style={{ width: "100%", height: "100%" }}
              src={selectedImage}
              alt="Product"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg';
              }}
            />
          </div>
         

          {/* Thumbnail images */}
          <div className="d-flex gap-2 justify-content-center p-2 w-50">
            {product.images && product.images.map((image, index) => (
              <img
                key={index}
                className="img-fluid w-25 object-fit-contain"
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleImageClick(image)}
                style={{ cursor: 'pointer', border: selectedImage === image ? '2px solid #007bff' : 'none' }}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg';
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-success">{product.category?.name}</h5>
          <h1 className="text-muted-h1 ">{product.title}</h1>
          <p>{product.description}</p>
          <div className="d-flex justify-content-between">
            <h2 className="text-muted">${totalPrice}</h2>
            <div className="">
              <p style={{ marginBottom: "3px" }} className="fw-bold text-dark pb-0">IN STOCK</p>
              <p style={{ marginBottom: "3px" }} className="text-muted ">CAM#:{product.title} </p>
            </div>
          </div>
          <hr />
          <p className="text-dark ">
            Qty
          </p>
          <select
            style={{
              padding: '6px',
              border: '1px solid #ccc',
              fontSize: '18px',
            }}
            value={quantity}
            onChange={handleQuantityChange}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
          <br />
          <button className="px-5 py-2 rounded-0 btn btn-primary mt-3">Add to Cart</button>
          <div className="d-block py-2">
            <a className="text-dark text-decoration-none px-2"><FontAwesomeIcon icon={faHeart} /> <span>Add to wishlist</span></a>
            <a className="text-dark text-decoration-none px-2"><FontAwesomeIcon icon={faCodeCompare} /> <span>Add to compare</span></a>
          </div>
        </div>
      </div>
      <section>
        <h3 className="text-center mt-5 pt-5">Related Products</h3>
        <div className="mx-lg-5 px-lg-5 mx-3 my-5">
          <Container>
          <Row noGutters className="">
            {Relatedproducts.map((product) => (
              <Col key={product.id} xs={6} sm={4} md={4} lg={4} xl={3} xxl={2} className="p-0">
                <Card className="product-card ">
                  <Card.Img variant="none" src={product.image} className="product-image" />
                  <Card.Body className="">
                    <Card.Title className="mb-1 text-truncate" style={{ fontSize: '0.9rem' }}>{product.name}</Card.Title>
                    <Card.Text className="mb-2 text-truncate " style={{ fontSize: '0.9rem' }}>{product.price}</Card.Text>
                    <div className="d-flex justify-content-end ">
                      <Button className="circle-button border" size="sm"><FontAwesomeIcon icon={faCartShopping} /></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
