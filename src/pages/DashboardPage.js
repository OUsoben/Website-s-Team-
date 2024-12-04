import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/DashboardStyle.css";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { GET_ALL_PRODUCTS } from '../services/productService';
import ProductModal from '../components/ProductModal';
import PreviewCard from '../components/PreviewCard';
import DashboardLoadingPlaceholder from '../components/DashboardLoadingPlaceholder';

const DashboardPage = () => {
  const [filteredText, setFilteredText] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreashStatus, setRefreashStatus] = useState(false); // Used to trigger re-fetching of data
  const [updatedProduct, setUpdatedProduct] = useState(null);

  useEffect(() => {
    // Fetch all products and filter by category (assuming category id is 1)
    GET_ALL_PRODUCTS().then(response => {
      const filteredProducts = response.filter((p) => p.category.id === 1);
      setProducts(filteredProducts.sort((a, b) => b.id - a.id));
      setLoading(false);
    }).catch(error => {
      console.log("Error:", error);
      setLoading(false);
    });
  }, [refreashStatus]); // This will trigger when refreashStatus changes

  let filteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(filteredText.toLowerCase())
  );

  const column = [
    {
      name: "ID",
      selector: row => row.id,
      width: "70px",
      sortable: true,
    },
    {
      name: "Image",
      selector: row => {
        try {
          console.log(row.images[0]); // Log the images field to check the format
          const images = JSON.parse(row.images[0].replace(/\\'/g, "'").replace(/\\"/g, '"'));
          return (
            <div className='image-container-dashboard'>
              <img className='img-fluid' src={images[0]} alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";
                }}
              />
            </div>
          );
        } catch (error) {
          console.error('Image parsing error:', error);
          return (
            <div className='image-container-dashboard'>
              <img className='img-fluid' src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="Placeholder" />
            </div>
          );
        }
      },
      width: "150px"
    },
    {
      name: "Title",
      selector: row => row.title,
      width: "200px",
      sortable: true,
    },
    {
      name: "Description",
      selector: row => row.description,
      width: "400px"
    },
    {
      name: "Price",
      selector: row => "$" + row.price,
      sortable: true,
      sortFunction: (a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceA - priceB;
      }
    }
  ];

  const handleCloseProductModal = () => {
    setShowProductModal(false);
  };

  const handleRowClicked = (row) => {
    setSelectedProduct(row);
  };

  const handleProductDelete = (id) => {
    filteredProduct = filteredProduct.filter((product) => product.id !== id);
    setProducts(filteredProduct);
    setSelectedProduct(null);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setUpdatedProduct(updatedProduct);
    setShowProductModal(true);
  };

  const handleCreateOrUpdateProduct = () => {
    // Refresh the product list after creating or updating
    setRefreashStatus(prevStatus => !prevStatus); // Toggle refreashStatus to trigger useEffect and refetch data
  };

  let navigate = useNavigate();

  return (
    <>
      <section style={{ fontSize: "15px", marginLeft: "12px" }} className='d-flex p-md-5 pt-2'>
        <ProductModal
          updatedProduct={updatedProduct}
          showModal={showProductModal}
          handleCloseProductForm={handleCloseProductModal}
          onProductCreatedOrUpdated={handleCreateOrUpdateProduct} // Pass callback to refresh
        />

        <p style={{ cursor: "pointer" }} className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            navigate("/")
          }}
        >Home</p>
        <p><FontAwesomeIcon style={{ width: "30px" }} className='font-style text-muted' icon={faAngleRight} /> Dashboard</p>
      </section>

      <section>
        <div className="container mb-5 bg-white rounded p-5">
          <h1>Product Dashboard</h1>
          <hr />
          <div className="d-flex gap-4">
            <div className="product-info col-3">
              {loading ? (
                <DashboardLoadingPlaceholder />
              ) : (
                <>
                  {selectedProduct ? (
                    <PreviewCard product={selectedProduct}
                      onDelete={handleProductDelete}
                      onUpdate={handleUpdateProduct} />
                  ) : (
                    <div className="mt-5 pt-5 d-flex flex-column justify-content-center text-center align-items-center">
                      <img className='img-fluid' style={{ width: "200px" }} src="https://cdn3d.iconscout.com/3d/premium/thumb/web-alert-6592068-5487955.png" alt="" />
                      <p>Choose product to perform modification</p>
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="data-table col-9">
              {loading ? (
                <DashboardLoadingPlaceholder />
              ) : (
                <DataTable
                  className="table table-striped table-hover w-100"
                  subHeader={true}
                  pointerOnHover={true}
                  selectableRowsHighlight={true}
                  highlightOnHover={true}
                  pagination={true}
                  columns={column}
                  responsive={true}
                  paginationPerPage={5}
                  data={filteredProduct}
                  onRowClicked={handleRowClicked}
                  subHeaderComponent={
                    <div className='d-flex w-50 gap-4'>
                      <button className='btn btn-primary px-4'
                        onClick={() => {
                          setShowProductModal(true);
                          setUpdatedProduct(null); // Reset updated product when creating a new one
                        }}
                      >Add </button>
                      <input className='form-control w-100 bg-white mb-0' type="text"
                        placeholder="Search Products..."
                        onChange={(e) => {
                          setFilteredText(e.target.value);
                        }}
                      />
                    </div>
                  }
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
