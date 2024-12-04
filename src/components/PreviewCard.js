import React, { useState } from 'react';
import "../styles/PreviewCard.css";
import { DELETE_PRODUCT_BY_ID } from '../services/productService';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';

const PreviewCard = ({ product, onDelete, onUpdate }) => {

  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProduct = () => {
    onUpdate(product);
  }

  // Function to handle image URLs and prevent JSON parsing error
  const getImageUrl = (imageData) => {
    // Check if imageData is a string and looks like a URL
    if (typeof imageData === 'string' && imageData.startsWith('http')) {
      return imageData; // It's already a URL, so return it directly
    }

    // If it's not a URL, attempt to parse it as JSON (for stringified arrays, for example)
    try {
      const parsedImages = JSON.parse(imageData);
      return parsedImages[0] || "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";
    } catch (e) {
      console.error("Error parsing image data:", e);
      return "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"; // Fallback if parsing fails
    }
  };

  const handleDeleteProduct = () => {
    setIsLoading(true);

    DELETE_PRODUCT_BY_ID(product.id).then((response) => {
      toast.success("Successfully Deleted");
      setIsLoading(false);
      onDelete(product.id);
    }).catch((error) => {
      toast.error("Failed to Delete!!");
      console.log("Error Delete:", error);
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className="mt-5">
        <div className='d-flex justify-content-center'>
          <div className='d-flex image-container-preview'>
            <img
              className='img-fluid'
              src={getImageUrl(product.images[0])} // Use the getImageUrl function to parse the image data
              alt={product.title}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";
              }}
            />
          </div>
        </div>

        <div className='p-3'>
          <p className='text-truncate'>{product.title}</p>
          <p className='text-muted text-truncate-2'>{product?.description}</p>
          <p className='text-danger'>${product.price}</p>
          <hr />
          <div className="btn-group" role="group">
            <button className='btn btn-secondary rounded-start px-3' onClick={handleUpdateProduct}>
              Edit
            </button>
            <button className='btn btn-danger rounded-end' onClick={handleDeleteProduct}>
              {isLoading ? (
                <ThreeDots
                  visible={true}
                  height="10"
                  width="25"
                  color="white"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ paddingLeft: "10px", paddingRight: "10px" }}
                />
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewCard;
