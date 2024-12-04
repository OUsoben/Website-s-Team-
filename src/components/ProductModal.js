import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCirclePlus, faPlus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { CREATE_PRODUCT, UPDATE_PRODUCT_BY_ID } from '../services/productService';
import { Oval, RotatingLines, ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { UPLOAD_FILE } from '../services/fileService';

const ProductModal = ({ updatedProduct, showModal, handleCloseProductForm }) => {

  const [title, setTitle] = useState(updatedProduct ? updatedProduct.title : "");
  const [description, setDescription] = useState(updatedProduct ? updatedProduct.description : "");
  const [price, setPrices] = useState(updatedProduct ? updatedProduct.price : 0);
  const [categoryId, setCategoryId] = useState(updatedProduct ? updatedProduct.categoryId : 1);
  const [images, setImages] = useState(updatedProduct ? updatedProduct.images : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s");
  const [selectedFile, setSelectedFiles] = useState(null);
  const [selectedImages, setSelectedImages] = useState(updatedProduct ? updatedProduct.images[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTitle(updatedProduct ? updatedProduct.title : "");
    setDescription(updatedProduct ? updatedProduct.description : "");
    setPrices(updatedProduct ? updatedProduct.price : 0);
    setCategoryId(updatedProduct ? updatedProduct.categoryId : 1);
    setImages(updatedProduct ? updatedProduct.images : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s");
    setSelectedImages(updatedProduct ? updatedProduct.images[0] : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s");
  }, [updatedProduct]);

  let product = {
    title,
    price,
    description,
    categoryId,
    images: [selectedImages || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"]
  }

  const handleCreateNewProduct = () => {
    setIsLoading(true);

    // If updating an existing product
    if (updatedProduct) {
        if (selectedFile) {
            let file = new FormData();
            file.append('file', selectedFile);

            UPLOAD_FILE(file).then(
                response => {
                    const uploadedImageUrl = response.location;

                    // Update images with the new image URL
                    setImages([uploadedImageUrl]);
                    product.images = [uploadedImageUrl];  // Update product images

                    // Update product on the backend
                    UPDATE_PRODUCT_BY_ID(updatedProduct.id, product).then(
                        response => {
                            toast.success("Product updated successfully");
                            setIsLoading(false);
                            handleCloseProductForm();
                        }
                    ).catch(error => {
                        toast.error("Failed to update product");
                        console.log("Failed to update product", error);
                        setIsLoading(false);
                    });
                }
            ).catch(error => {
                console.log("Error uploading file", error);
                toast.error("Failed to upload file!");
                setIsLoading(false);
            });
        } else {
            // If no new image, keep existing product images
            product.images = updatedProduct.images;

            // Update product on the backend
            UPDATE_PRODUCT_BY_ID(updatedProduct.id, product).then(
                response => {
                    toast.success("Product updated successfully");
                    setIsLoading(false);
                    handleCloseProductForm();
                }
            ).catch(error => {
                toast.error("Failed to update product");
                console.log("Failed to update product", error);
                setIsLoading(false);
            });
        }

    } else {
        // Creating a new product
        if (selectedFile) {
            let file = new FormData();
            file.append('file', selectedFile);

            UPLOAD_FILE(file).then(
                response => {
                    const uploadedImageUrl = response.location;

                    // Set the new image URL
                    setImages([uploadedImageUrl]);
                    product.images = [uploadedImageUrl];

                    // Create product on the backend
                    CREATE_PRODUCT(product).then(
                        response => {
                            toast.success("Product created successfully");
                            setIsLoading(false);
                        }
                    ).catch(error => {
                        toast.error("Failed to create product");
                        console.log("Failed to create product", error);
                        setIsLoading(false);
                    });
                }
            ).catch(error => {
                console.log("Error uploading file", error);
                toast.error("Failed to upload file!");
                setIsLoading(false);
            });
        } else {
            // Create product without image
            CREATE_PRODUCT(product).then(
                response => {
                    toast.success("Product created successfully");
                    setIsLoading(false);
                }
            ).catch(error => {
                toast.error("Failed to create product");
                console.log("Failed to create product", error);
                setIsLoading(false);
            });
        }
    }
};

const handleImageChange = (e) => {
    setSelectedFiles(e.target.files[0]);
  
    let imageUrl = URL.createObjectURL(e.target.files[0]);
  
    setSelectedImages(imageUrl);
};

const handleCloseProduct = () => {
    handleCloseProductForm(false);
};

return (
  <Modal size="xl" show={showModal} onHide={handleCloseProduct}>
    <Modal.Header closeButton={false}>
      <Modal.Title className="m-auto">
        {updatedProduct ? "Update Product Information" : "Create New Product"}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="d-flex">
        <div className="img-side w-50">
          <label htmlFor="file-input">
            <img
              id="preview-image"
              className="img-fluid img-thumbnail"
              width="400px"
              src={selectedImages || "https://www.posterprintfactory.com/assets/file_placeholder.png"}
              alt="Product"
            />
          </label>

          <div className="more-images">
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-flex justify-content-center align-items-center position-relative">
                <img
                  className="img-fluid img-thumbnail"
                  width="50px"
                  src={selectedImages || "https://www.posterprintfactory.com/assets/file_placeholder.png"}
                  alt="Thumbnail"
                />
                <div className="position-absolute" style={{ top: "-15px", right: "-5px" }}>
                  <button className="btn btn-danger btn-sm rounded-circle">
                    <FontAwesomeIcon icon={faBan} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <input
            className="form-control d-none"
            type="file"
            id="file-input"
            onChange={handleImageChange}
            multiple
          />
        </div>

        <div className="d-flex w-100 ms-3 flex-column">
          <div className="d-flex mb-3 gap-3 align-items-center justify-content-between">
            <div className="form-floating w-75">
              <input
                type="text"
                className="form-control bg-white"
                id="floatingInput"
                placeholder="Product Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <label htmlFor="floatingInput" className="input-label">
                <span className="ms-2">Product Title</span>
              </label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control bg-white"
                id="floatingInput"
                value={price}
                onChange={e => setPrices(e.target.value)}
                placeholder="Product Price"
              />
              <label htmlFor="floatingInput" className="input-label">
                <span className="ms-2">Product Price</span>
              </label>
            </div>
          </div>

          <div className="form-floating mb-3">
            <textarea
              cols={3}
              className="form-control bg-white"
              id="floatingInput"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Product Description"
              style={{ height: "170px" }}
            ></textarea>
            <label htmlFor="floatingInput" className="input-label">
              <span className="ms-2">Product Description</span>
            </label>
          </div>

          <Button variant="primary" className="px-3 mb-2" onClick={handleCreateNewProduct}>
            {isLoading ? (
              <div className="d-flex justify-content-center">
                <Oval visible={true} height="25" width="20" color="white" ariaLabel="oval-loading" />
              </div>
            ) : (
              updatedProduct ? "Update" : "Create"
            )}
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);
};

export default ProductModal;
