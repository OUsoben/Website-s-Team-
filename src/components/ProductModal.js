import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCirclePlus, faPlus, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { CREATE_PRODUCT } from '../services/productService';
import { Oval, RotatingLines, ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { UPLOAD_FILE } from '../services/fileService';


const ProductModal = ({ showModal, handleCloseProductForm }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrices] = useState(0);
  const [categoryId, setCategoryId] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFiles] = useState(null);
  const [selectedImages, setSelectedImages] = useState(null);

  const [isLoading, setIsLoading] = useState(false)



  let product = {
    title,
    price,
    description,
    categoryId,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"
    ]
  }
  console.log(product)

  const handleCreateNewProduct = () => {
    setIsLoading(true)

    if(selectedFile){
    //   // upload file to the server
    //   // create new product
  alert("Uploading new product")
      let file = new FormData()
      file.append('file', selectedFile)

      UPLOAD_FILE(file).then(
        response =>{  

          setImages([])
          setImages(images.push(response.location))
          
          product.images = images

          console.log("Upload image is ",images)
        
          
        //   CREATE_PRODUCT(product).then(
        //     response => {
        //       toast.success("Create Product successfully")
        //       setIsLoading(false)
        //     }
        //   ).catch(
        //     error => {
        //       toast.error("Create Product failed")
        //       console.log("Failed to creating new product", error)
        //       setIsLoading(false)
        //     }
        //   )
        
         }

      ).catch(
        error => {
          console.log("Error uploading file", error)
          toast.error("failed to uplaod file !")
        }
      )

    }
    else {
       CREATE_PRODUCT(product).then(
      response => {
        toast.success("Create Product successfully")
        setIsLoading(false)
      }
    ).catch(
      error => {
        toast.error("Create Product failed")
        console.log("Failed to creating new product", error)
        setIsLoading(false)
      }
    )
  }
}


   
  const handleImageChange = (e) => {

        setSelectedFiles(e.target.files[0]);

        let imageUrl = URL.createObjectURL(e.target.files[0])

        setSelectedImages(imageUrl)
    }
      

  const handleCloseProduct = () => {
    handleCloseProductForm(false)
  }
  return (
    <Modal size="xl" show={showModal} onHide={handleCloseProduct} >
      <Modal.Header closeButton={false}>
        <Modal.Title className="m-auto">Create New Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex">
          <div className="img-side w-50">
            <label htmlFor="file-input">
              <img
                id="preview-image"
                className="img-fluid img-thumbnail"
                width="400px "
                src={
                  selectedImages ? selectedImages :
                  "https://www.posterprintfactory.com/assets/file_placeholder.png"
                }
                alt="Profile Picture"
              />
            </label>

            {/* here we listing a smaller images  */}
            <div className="more-images">
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center position-relative">
                  <img
                    className="img-fluid img-thumbnail"
                    width="50px "
                    src={
                      selectedImages ? selectedImages :
                      "https://www.posterprintfactory.com/assets/file_placeholder.png"
                    }

                    alt="Profile Picture"
                  />
                  <div
                    className=" position-absolute"
                    style={{ top: "-15px", right: "-5px" }}
                  >
                    <button className="btn btn-danger btn-sm   rounded-circle">
                      <FontAwesomeIcon icon={faBan} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* d-none */}
            <input
              className="form-control  d-none  "
              type="file"
              name=""
              id="file-input"
              onChange={handleImageChange}
              multiple
            />
          </div>

          <div className="d-flex w-100   ms-3 flex-column ">
            <div className="d-flex mb-3  gap-3 align-items-center  justify-content-between">
              <div class="form-floating w-75 ">
                <input
                  type="text"
                  class="form-control  bg-white"
                  id="floatingInput"
                  placeholder="Jonh Doe"
                  onChange={e => setTitle(e.target.value)}
                />
                <label for="floatingInput" className="input-label ">
                  <div className="d-flex align-items-center ">
                    <span className="ms-2"> Product Title </span>
                  </div>
                </label>
              </div>
              <div class="form-floating  ">
                <input
                  type="number"
                  class="form-control bg-white"
                  id="floatingInput"
                  onChange={e => setPrices(e.target.value)}
                  placeholder="Jonh Doe"

                />
                <label for="floatingInput" className="input-label">
                  <div className="d-flex align-items-center">
                    <span className="ms-2">Product Price </span>
                  </div>
                </label>
              </div>
            </div>

            <div class="form-floating mb-3  ">
              <textarea
                cols={3}
                type="text"
                class="form-control bg-white"
                id="floatingInput"
                onChange={e => setDescription(e.target.value)}

                placeholder="name@example.com"
                style={{ height: "170px" }}
              ></textarea>
              <label for="floatingInput" className="input-label">
                <div className="d-flex align-items-center">
                  <span className="ms-2">Product Description </span>
                </div>
              </label>
            </div>
            <Button
              variant="primary"
              className="px-3  mb-2"
              onClick={handleCreateNewProduct}

            >

              {
                isLoading ? <>
                  <div className="d-flex justify-content-center">
                    <Oval
                      visible={true}
                      height="25"
                      width="20"
                      color="white"
                      ariaLabel="oval-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>

                </>
                  : 

                  "Create Product"
                
              }

            </Button>

          </div>

        </div>

      </Modal.Body>
    </Modal>
  );
};


export default ProductModal