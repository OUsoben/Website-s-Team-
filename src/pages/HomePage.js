// components/HomePage.js
import React from 'react';
import '../styles/HomeStyle.css';

const HomePage = () => {
  return (
    <div className="px-5 my-5">
      <div className="row g-3">
        <div className="col-12 col-lg-9">
          <div className="bg-white rounded p-3 h-100 d-flex flex-column flex-lg-row justify-content-around pt-5">
            <div>
              <h2>MacBook Pro</h2>
              <p>Supercharged for pros</p>
              <p>Price $1800</p>
              <button className="btn btn-warning">Shop now</button>
            </div>
            <div>
              <img
                className="img-fluid w-lg-50"
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
                alt="MacBook Pro"
              />
            </div> 
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="bg-white rounded p-3 mb-3">
            <p>Shopping here $1100</p>
            <h3>iPhone 16 pro 128GB</h3>
            <a href="#" className="">Shop now</a>
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_ade3a4ab-62fd-4451-98de-0cfac33b0520?wid=488&hei=488&fmt=pjpeg"
              alt="iPhone 16 pro"
              className="img-fluid"
            />
          </div>
          <div className="bg-white rounded p-3">
            <p>Shopping here $40</p>
            <h3>Big Discount on Belt</h3>
            <a href="#" className="">Shop now</a>
            <img
              src="https://m.media-amazon.com/images/I/51XC12BfQDL._AC_UY350_.jpg"
              alt="Belt"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="row g-3 mt-1">
        <div className="col-12 col-lg-3">
          <div className="bg-white rounded p-3">
            <p>Shopping here</p>
            <h3>Special Discount on Paper Toilet</h3>
            <a href="#" className="">Shop now</a>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOwONEKyceGeyKor9t9LkzdIfsUK-cOghvysAGbFKk--wTYu0kuOxwPBLw-UHi01tTjcI&usqp=CAU"
              alt="Paper Toilet"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="bg-white rounded p-3">
            <p>Shopping here $50</p>
            <h3>Shoes 20% off</h3>
            <a href="#" className="">Shop now</a>
            <img
              src="https://www.campusshoes.com/cdn/shop/files/MOVE_22G-1005_NAVY-F.ORG_2_1024x.jpg?v=1688018592"
              alt="Shoes"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="bg-white rounded p-3">
            <p>Shopping here $120</p>
            <h3>Super Deal in Bags</h3>
            <a href="#" className="">Shop now</a>
            <img
              src="https://m.media-amazon.com/images/I/61UDx9jF0mL._AC_SL1315_.jpg"
              alt="Bag"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <div className="bg-white rounded p-3">
            <p>Shopping here</p>
            <h3>Women's Sport Products</h3>
            <a href="#" className="">Shop now</a>
            <img
              src="https://sportstore.co.uk/cdn/shop/collections/AFTERSHOKZ-AEROPEX-Wireless-Bone-Conduction-Headphones15-e1662725637323_72284e07-5b5a-4fdf-bfdc-29440808775b.webp?v=1696510167&width=535"
              alt="Women's Sport Products"
              className="img-fluid"
            />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus, impedit ipsam aperiam aspernatur voluptates nobis dolorem quaerat tempore deleniti suscipit reiciendis ut temporibus iste quas? Cumque vero architecto fuga!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
