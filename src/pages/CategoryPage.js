import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBars, faChevronDown, faList } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { GET_ALL_PRODUCTS } from '../services/productService';
import '../styles/CategoryStyle.css';
import PLaceHolderCard from '../components/PLaceHolderCard';

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(60);

  useEffect(() => {
    GET_ALL_PRODUCTS()
      .then((data) => {
        let filteredProduct = data.filter(
          (p) => p.category.name.toLowerCase() === 'New Category By Azizi'
        );
        setProducts(data.sort((a, b) => b.id - a.id));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log('error is', error);
      });
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const placeholderCards = (number) => {
    let placeholders = [];
    for (var i = 0; i < number; i++) {
      placeholders.push(
        <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6'>
          <PLaceHolderCard />
        </div>
      );
    }
    return placeholders;
  };

  let navigate = useNavigate(); // Import the useNavigate hook from react-router-dom
  return (
    <>
      <section style={{ fontSize: '15px', marginLeft: '12px' }} className='d-flex pt-md-5 px-md-5 pt-2'>
        <p
          style={{ cursor: 'pointer' }}
          className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            // Navigate to Home page
            navigate('/');
          }}
        >
          Home
        </p>
        <p>
          <FontAwesomeIcon style={{ width: '30px' }} className='font-style text-muted' icon={faAngleRight} /> Categories
        </p>
      </section>

      <section className='row px-xxl-5 px-xxl-4 px-2 me-1 mx-xxl-5 pt-4 pb-5 mb-5 '>
        <div style={{ height: '700px' }} className=' col-2 p-2 bg-white rounded d-none d-xxl-inline'>
          <p className='text-center list-font fs-5 pt-1'>Categories</p>
          <div className='d-flex flex-column'>
            <a className='bg-primary text-white rounded py-2 px-2 my-1 text-decoration-none list-font'>
              <FontAwesomeIcon icon={faBars} /> <span className='ps-2'>All Category</span>
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Electronics
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Women
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Men
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Health & Beauty
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Kid Store
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Toy & Video Game
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Motocycle
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Sports
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Clothing
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Home & Furniture
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              Acessories
            </a>
            <a className='hover-bg-primary list-font rounded py-2 px-2 my-1 text-decoration-none'>
              See more <FontAwesomeIcon icon={faChevronDown} />
            </a>
          </div>
        </div>

        <div className='col-xxl-10 col-12 ps-xxl-4 pe-0 pt-4'>
          <div className='d-flex justify-content-between'>
            <p className='list-font'>
              <FontAwesomeIcon icon={faList} /> List
            </p>
            <div className='d-flex'>
              <p className='list-font d-none d-sm-inline'>
                Sort by : Default sorting <FontAwesomeIcon icon={faChevronDown} />
              </p>
              <p className='list-font ps-4'>Show : 60 <FontAwesomeIcon icon={faChevronDown} /></p>
            </div>
          </div>
          <div className='row'>
            {isLoading ? (
              <>
                {placeholderCards(18)}
              </>
            ) : products.length === 0 ? (
              <>
                <div className='d-flex justify-content-lg-center align-items-center text-center text-start container mt-5'>
                  <div className='col-12 col-xxl-7 pt-5'>
                    <h2>There is no product to show</h2>
                    <p>
                      We apologize, but there are currently no products available to show at this time.
                      Please check back later or contact our customer service team for more information.
                      Thank you for your understanding and patience.
                    </p>
                    <img
                      className='img-fluid'
                      src='https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-download-in-svg-png-gif-file-formats--available-product-tokostore-pack-e-commerce-shopping-illustrations-2809510.png?f=webp'
                      alt=''
                    />
                  </div>
                </div>
              </>
            ) : (
              currentProducts.map((product) => {
                return (
                  <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6' key={product.id}>
                    <ProductCard productData={product} />
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination Controls */}
          <div className='d-flex justify-content-center mt-4'>
            <button
              className='btn btn-outline-primary me-3'
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
            <button
              className='btn btn-outline-primary'
              disabled={currentPage * productsPerPage >= products.length}
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </div>

          <div className='d-flex justify-content-center mt-3'>
            <p>Page {currentPage}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryPage;
