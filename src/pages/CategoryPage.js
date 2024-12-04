import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars, faChevronDown, faList } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { GET_ALL_PRODUCTS } from '../services/productService';
import '../styles/CategoryStyle.css';
import PLaceHolderCard from '../components/PLaceHolderCard';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 30;

  useEffect(() => {
    GET_ALL_PRODUCTS()
      .then(
        data => {
          const filteredProducts = data.filter((p) => p.category.id == 1)

          setProducts(filteredProducts.sort((a, b) => b.id - a.id)); // Sorting products

          setIsLoading(false);
        })
      .catch((error) => {
        console.log('Error:', error);
        setIsLoading(false); // Ensure loading is turned off even when there's an error
      });
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const placeholderCards = (number) => {
    let placeholders = [];
    for (let i = 0; i < number; i++) {
      placeholders.push(
        <div key={i} className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
          <PLaceHolderCard />
        </div>
      );
    }
    return placeholders;
  };

  let navigate = useNavigate(); // Import the useNavigate hook from react-router-dom

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(2);

  useEffect(() => {
    if (isSmallScreen) {
      setPageRangeDisplayed(2);
    } else {
      setPageRangeDisplayed(5);
    }
  }, [isSmallScreen]);

  return (
    <>
      <section style={{ fontSize: '15px', marginLeft: '12px' }} className="d-flex pt-md-5 px-md-5 pt-2">
        <p
          style={{ cursor: 'pointer' }}
          className="text-muted ps-xl-5 font-style hover-home"
          onClick={() => navigate('/')}
        >
          Home
        </p>
        <p>
          <FontAwesomeIcon style={{ width: '30px' }} className="font-style text-muted" icon={faAngleRight} /> Categories
        </p>
      </section>

      <section className="row px-xxl-5 px-xxl-4 px-2 me-1 mx-xxl-5 pt-4 pb-5 mb-5">
        <div style={{ height: '800px', top: '90px' }} className="col-2 p-2 rounded d-none d-xxl-inline position-sticky">
          <p className="text-center list-font fs-5 pt-1">Categories</p>
          <div className="d-flex flex-column">
            <a className="bg-primary text-white rounded py-2 px-2 my-1 text-decoration-none list-font">
              <FontAwesomeIcon icon={faBars} /> <span className="ps-2">All Category</span>
            </a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Electronics</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Women</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Men</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Health & Beauty</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Kid Store</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Toy & Video Game</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Motorcycle</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Sports</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Clothing</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Home & Furniture</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">Accessories</a>
            <a className="hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none">
              See more <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>
        </div>

        <div className="col-xxl-10 col-12 ps-xxl-4 pe-0 pt-4">
          <div className="d-flex justify-content-between">
            <p className="list-font">
              <FontAwesomeIcon icon={faList} /> List
            </p>
            <div className="d-flex">
              <p className="list-font d-none d-sm-inline">
                Sort by : Default sorting <FontAwesomeIcon icon={faChevronDown} />
              </p>
              <p className="list-font ps-4">Show : 30 <FontAwesomeIcon icon={faChevronDown} /></p>
            </div>
          </div>
          <div className="row">
            {isLoading ? (
              // Display placeholders while loading
              <>
                {placeholderCards(18)}
              </>
            ) : products.length === 0 ? (
              // Display no product found message
              <div className="d-flex justify-content-lg-center align-items-center text-center text-start container mt-5">
                <div className="col-12 col-xxl-7 pt-5">
                  <h2>There are no product to display</h2>
                  <p>
                    We apologize, but there are currently no products available to show at this time.
                    Please check back later or contact our customer service team for more information.
                    Thank you for your understanding and patience.
                  </p>
                  <img
                    className="img-fluid"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png?f=webp"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <>
                {displayedProducts.map((product) => (
                  <div key={product.id} className="col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6">
                    <ProductCard productData={product} />
                  </div>
                ))}

                <div className="d-flex justify-content-center px-2 py-3">
                  <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={pageRangeDisplayed}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
