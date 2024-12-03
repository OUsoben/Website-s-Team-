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
    // Related products (same as your current data)
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
        // Set default selected image to the first image if available
        if (response && response.images && Array.isArray(response.images) && response.images.length > 0) {
          setSelectedImage(response.images[0]);
        }
      }
    ).catch(
      error => {
        console.log("Error getting product", error);
      });
  }, [id]);

  if (!product) {
    return <div><ProductDetailPlaceHolder /></div>;
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const totalPrice = (product.price * quantity).toFixed(2);

  const handleImageError = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = 'https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'; // Set placeholder image
  };

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
              onError={handleImageError} // Handle image load error
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
                onError={handleImageError} // Handle error for thumbnails
              />
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-success">{product.category?.name}</h5>
          <h1 className="text-muted-h1">{product.title}</h1>
          <p>{product.description}</p>
          <div className="d-flex justify-content-between">
            <h2 className="text-muted">${totalPrice}</h2>
            <div>
              <p style={{ marginBottom: "3px" }} className="fw-bold text-dark pb-0">IN STOCK</p>
              <p style={{ marginBottom: "3px" }} className="text-muted">CAM#:{product.title}</p>
            </div>
          </div>
          <hr />
          <p className="text-dark">Qty</p>
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
              <option key={qty} value={qty}>{qty}</option>
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

      {/* Related products section */}
      <section>
        <h3 className="text-center mt-5 pt-5">Related Products</h3>
        <div className="mx-lg-5 px-lg-5 mx-3 my-5">
          <Container>
            <Row noGutters className="">
              {Relatedproducts.map((product) => (
                <Col key={product.id} xs={6} sm={4} md={4} lg={4} xl={3} xxl={2} className="p-0">
                  <Card className="product-card">
                    <Card.Img variant="none" src={product.image} className="product-image" />
                    <Card.Body className="">
                      <Card.Title className="mb-1 text-truncate" style={{ fontSize: '0.9rem' }}>{product.name}</Card.Title>
                      <Card.Text className="mb-2 text-truncate" style={{ fontSize: '0.9rem' }}>{product.price}</Card.Text>
                      <div className="d-flex justify-content-end">
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
