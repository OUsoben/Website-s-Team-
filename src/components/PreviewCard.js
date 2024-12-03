import React, { useState } from 'react'
import "../styles/PreviewCard.css"
import { DELETE_PRODUCT_BY_ID } from '../services/productService'
import { toast } from 'react-toastify'
import { RotatingLines, ThreeDots } from 'react-loader-spinner'

const PreviewCard = ({ product, onDelete }) => {


  const [isLaoding, setIsLaoding] = useState(false);


  const handleDeleteProduct = () => {
 
 
     setIsLaoding(true)

    DELETE_PRODUCT_BY_ID(product.id).then(
      response => {
        toast.success(" Successfully Deleted ");
        setIsLaoding(false);
        onDelete(product.id)

      }
    ).catch(
      error => {
        toast.error("Failed to Delete !! ");
        console.log("Error Delete : ", error);
        setIsLaoding(false)
      }
    )

  }

  return (
    <>
      <div className=" mt-5">
        <div className=' d-flex justify-content-center'>
          <div className=' d-flex  image-container-preview'>
            <img className='img-fluid' src={product.images.length > 0 ?
              product.images[0] :
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            } alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
              }}
            />

          </div>
        </div>

        <div className='p-3'>
          <p className='text-truncate'>{product.title}</p>
          <p className='text-muted  text-truncate-2'>{product?.description} </p>
          <p className='text-danger'>${product.price}</p>
          <hr />
          <div className="btn-group" role="group">
            <button className='btn btn-secondary rounded-start px-3'

            >
              Edit
             
            </button>
            <button className='btn btn-danger rounded-end'
              onClick={handleDeleteProduct}
            >
              {
                isLaoding ? 
                <>
                <ThreeDots
                visible={true}
                height="10"
                width="25"
                color="white"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{paddingLeft:"10px",paddingRight:"10px"}}
                wrapperClass=""
              />
                </>:
                "Delete"
              }
              


            </button>
          </div></div>

      </div>
    </>
  )
}

export default PreviewCard