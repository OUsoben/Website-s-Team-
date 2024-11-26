import React from 'react';
import '../styles/ProductDetailPlaceHolder.css'; // Make sure to import the CSS

const ProductDetailPlaceHolder = () => {
  return (
    <div className="container my-5 flex-column flex-xxl-row d-flex details-product">
      <div className="slider-image col-lg-12 col-xxl-6 d-flex justify-content-center flex-column align-items-center gap-3">
        {/* Placeholder for the main image */}
        <div
          className="image-wrapping position-relative img-fluid skeleton-image"
          style={{ width: "400px", height: "400px" }}
        >
          <div className="skeleton skeleton-image-main"></div>
        </div>

        {/* Placeholder for the thumbnail images */}
        <div className="d-flex gap-2 justify-content-center p-2 w-50">
          <div className="skeleton skeleton-thumbnail"></div>
          <div className="skeleton skeleton-thumbnail"></div>
          <div className="skeleton skeleton-thumbnail"></div>
        </div>
      </div>

      {/* Placeholder for product details */}
      <div className="product-details-placeholder">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-price"></div>
        <div className="skeleton skeleton-description"></div>

        {/* Placeholder for the "Add to Cart" button */}
        <div className="skeleton skeleton-button"></div>
        
        <div className="d-block py-2">
          <div className="skeleton skeleton-wishlist"></div>
          <div className="skeleton skeleton-compare"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPlaceHolder;
