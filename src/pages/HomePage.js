import React from 'react';
import '../styles/HomeStyle.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomePage = () => {
  const exploreBrandList = [
    {
      image: "https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg", title: "Apple"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mfvT-rvzNvfs9oCVeQ2v0NcWSEXM_WEK0Q&s", title: "Samsung"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7NGDjrFhB9rX770YcXU8k9u4NPWpCsuGcg&s", title: "Sony"
    },
    {
      image: "https://img.ltwebstatic.com/images3_spmp/2024/07/25/d6/1721908591dcd35ca482495d6661e83da1bdc4d17e_thumbnail_720x.jpg", title: "Nike"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9ISFrVUDI-cy1WByfuxRBcj4l1HaTR7S4ESC-G8QCsqrNvKfd-tX7kyIhiP5Rk7HA3s&usqp=CAU", title: "Adidas"
    },
    {
      image: "https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm--N40598_PM2_Front%20view.jpg", title: "Louis Vuitton"
    },
    {
      image: "https://www.cutlerandgross.com/media/catalog/product/cache/8e555fcdf62da15bebe859220ab3f2b6/1/_/1_50_.jpg", title: "Oakley"
    },
    {
      image: "https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2021-06/Spirit-of-Big-Bang-Black-Magic-42-mm-soldier-shot.png?itok=hW2C0D2L", title: "Hublot"
    },
    {
      image: "https://assets.manufactum.de/p/086/086105/86105_01.jpg/grease-leather-belt-nature.jpg", title: "Gucci"
    },
    {
      image: "https://m.media-amazon.com/images/I/614nq0D5gSL._SL1500_.jpg", title: "Cerave"
    },
    {
      image: "https://m.media-amazon.com/images/I/51HkrsR0r+L.jpg", title: "MSI"
    },
    {
      image: "https://cam-do.com/cdn/shop/products/camera-gopro-hero5-black-1_96e6e60c-61ed-4e5d-aa49-34511f8d8320_600x.jpg?v=1613543650", title: "GoPro "
    },
    // Add more brands as needed
  ];
  const exploreCategorieList = [
    {
      image: "https://dc2zcmcikfrna.cloudfront.net/images/el3010_aa%20global-vivitar-wireless-audio-kit-3pc---ear-buds-headphones-speaker-audio-kit-large-pic.jpg?v=3935646764", title: "Electronics"
    },
    {
      image: "https://wp2print.net/wp-content/uploads/2023/06/tshirt-black.png", title: "Clothing"
    },
    {
      image: "https://imageskincare.com/cdn/shop/files/Untitled_design_72.webp?v=1717849725&width=1200", title: "Health & Beauty"
    },
    {
      image: "https://t3.ftcdn.net/jpg/05/28/57/64/360_F_528576447_j08koWfGyhXMweJzDz6qzx6yYBBKJSnM.jpg", title: "House & Kitchen"
    },
    {
      image: "https://images.thdstatic.com/productImages/ed5378f5-e035-4889-b21f-07dbf8d14e3b/svn/grey-and-natural-simpli-home-dining-chairs-axcmalw-g-64_600.jpg", title: "Home & Furniture"
    },
    {
      image: "https://png.pngtree.com/thumb_back/fw800/background/20240526/pngtree-assorted-organic-vegetables-in-wicker-basket-isolated-on-white-background-image_15731949.jpg", title: "Vegetable & Fruit"
    },
    {
      image: "https://t4.ftcdn.net/jpg/04/40/84/91/360_F_440849125_R7r06mBgJEQSXtmikawAqMGtb18GY6vz.jpg", title: "Toys & Video game"
    },
    {
      image: "https://www.bhubaneswarflowershop.com/productimages/CSCSUUN451_big.jpg", title: "Baby care"
    },
    {
      image: "https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-77516efa4fe5d700d23be705ce64c89a3471910c.jpg?s=1100&c=85&f=jpeg", title: "Sports"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRypNzTkU2rLrv7ui0dYgKzrOsSY5yrzIaUyWpmenIF6UDnvJYnc-xyzrxI5kwyxUKSFQ&usqp=CAU", title: "Accessories"
    },
    {
      image: "https://m.media-amazon.com/images/I/51HkrsR0r+L.jpg", title: "MSI"
    },
    {
      image: "https://cam-do.com/cdn/shop/products/camera-gopro-hero5-black-1_96e6e60c-61ed-4e5d-aa49-34511f8d8320_600x.jpg?v=1613543650", title: "GoPro "
    },
    // Add more brands as needed
  ];
  return (
    <>
      <section className="px-md-5 mt-xl-5 px-2 ">
        <div className="row g-3 ">
          <div className="col-lg-12 col-xxl-9 ">
            <div style={{ height: "686px" }} className="bg-white rounded d-flex flex-column flex-lg-row justify-content-around p-xl-5">
              <div className='p-5 text-md-center text-xl-start'>
                <h2>MacBook Pro</h2>
                <p>Supercharged for pros</p>
                <p>Price $1800</p>
                <button className="btn btn-warning">Shop now</button>
              </div>
              <div className=' container custom-width'>
                <img
                  className="img-fluid "
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
                  alt="MacBook Pro"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-xxl-3 colx-xl-12  d-flex flex-xxl-column flex-row gap-1">
            <div style={{ height: "333px" }} className="box col-xxl-12 col-6  d-flex flex-column flex-lg-row justify-content-around  align-items-center">
              <div>
                <p className='text-muted'>Shopping here $1100</p>
                <h3>iPhone 16 pro 128GB</h3>
                <a style={{ cursor: "pointer" }} className="">Shop now  <FontAwesomeIcon icon={faArrowRight} /></a>

              </div>
              <div className="image-container1">
                <img className='img-fluid'
                  src="https://target.scene7.com/is/image/Target/GUEST_ade3a4ab-62fd-4451-98de-0cfac33b0520?wid=488&hei=488&fmt=pjpeg"
                  alt="iPhone 16 pro"
                />
              </div>
            </div>
            <div style={{ height: "333px" }} className="box col-xxl-12 col-6 mt-xxl-1 d-flex flex-column flex-lg-row justify-content-around align-items-center">
              <div>
                <p className='text-muted'>Shopping here $40</p>
                <h3>Big Discount on Belt</h3>
                <a style={{ cursor: "pointer" }} className="">Shop now  <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
              <div className="image-container1">
                <img
                  className='img-fluid'
                  style={{ width: "70%" }}
                  src="https://m.media-amazon.com/images/I/51XC12BfQDL._AC_UY350_.jpg"
                  alt="Belt"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row g-lg-3 g-1  pt-2 ">
          <div className="col-12 col-lg-3">
            <div style={{ height: "330px" }} className="box d-flex flex-column align-items-center">
              <p className='text-muted'>Shopping here</p>
              <h3>Special Discount on Paper Toilet</h3>
              <a style={{ cursor: "pointer" }} className="">Shop now  <FontAwesomeIcon icon={faArrowRight} /></a>
              <div className="">
                <img style={{ width: "70%" }} className='img-fluid'
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwONEKyceGeyKor9t9LkzdIfsUK-cOghvysAGbFKk--wTYu0kuOxwPBLw-UHi01tTjcI&usqp=CAU"
                  alt="Paper Toilet"
                />
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div style={{ height: "330px" }} className="box d-flex flex-column  align-items-center">
              <p className='text-muted'>Shopping here $50</p>
              <h3>Shoes 20% off</h3>
              <a style={{ cursor: "pointer" }} className="">Shop now  <FontAwesomeIcon icon={faArrowRight} /></a>
              <div className="image-container1">
                <img className='img-fluid'
                  src="https://t3.ftcdn.net/jpg/01/21/81/86/360_F_121818673_6EID5iF76VCCc4aGOLJkd94Phnggre3o.jpg"
                  alt="Shoes"
                />
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div style={{ height: "330px" }} className="box d-flex flex-column align-items-center">
              <p className='text-muted'>Shopping here $120</p>
              <h3 >Super Deal in Bags</h3>
              <a style={{ cursor: "pointer" }} className="">Shop now  <FontAwesomeIcon icon={faArrowRight} /></a>
              <div className="image-container1">
                <img style={{ width: "70%" }} className='img-fluid'
                  src="https://m.media-amazon.com/images/I/61UDx9jF0mL._AC_SL1315_.jpg"
                  alt="Bag"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div style={{ height: "330px" }} className="box d-flex flex-column align-items-center">
              <p className='text-muted'>Shopping here</p>
              <h3>Women's Sport Products</h3>
              <a style={{ cursor: "pointer" }} className="">Shop now  <FontAwesomeIcon icon={faArrowRight} /></a>
              <div className="image-container1">
                <img style={{ width: "70%" }} className='img-fluid'
                  src="https://sportstore.co.uk/cdn/shop/collections/AFTERSHOKZ-AEROPEX-Wireless-Bone-Conduction-Headphones15-e1662725637323_72284e07-5b5a-4fdf-bfdc-29440808775b.webp?v=1696510167&width=535"
                  alt="Women's Sport Products"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* exlpore brand */}
      <section className='px-md-5 pt-2 px-2 '>
        <div className='bg-white'>
          <div className='d-flex justify-content-between  px-4 pt-4'>
            <h4>Explore Popular Brands</h4>
            <a className='text-muted' href="#">See all</a>
          </div>
          <hr />
          <div className='scroll-container'>
            {
              exploreBrandList.map((product, index) => (
                <div key={index} className=''>
                  <div className='item-container'>
                    <img className='img-fluid' src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className='px-md-5 pt-2 px-2 '>
        <div className='bg-white'>
          <div className='d-flex justify-content-between  px-4 pt-4'>
            <h4>Explore Popular categories</h4>
            <a className='text-muted' href="#">See all</a>
          </div>
          <hr />
          <div className='scroll-container'>
            {
              exploreCategorieList.map((product, index) => (
                <div key={index} className=''>
                  <div className='item-container'>
                    <img className='img-fluid' src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
