import React from 'react';
import '../styles/HomeStyle.css';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';


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
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSll76NKOSbANKDRg8QsxYToO3eZ3V0D1_84Q&s", title: "Gaming Laptops"
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
      image: "https://www.titanwatches.sg/cdn/shop/files/90188AP03_1_658a88c7-3491-4caf-b932-b7cc698b21c8.jpg?v=1718101821&width=533", title: "Smart Watches"
    },
    {
      image: "https://minimotorsusa.com/cdn/shop/products/dualtron-thunder-3-electric-scooter-side.jpg?v=1678911955", title: "Electric Scooters "
    },
  ];
  const bestSellerList = [
    {
      image: "https://images.thdstatic.com/productImages/bf511101-c41b-483f-9d48-058ab076488e/svn/scott-toilet-paper-10060-64_600.jpg",
      title: " paper",
      price: 10.2,
      description: "A classic paper that is perfect for drawing, sketching, or just as a fun toy.",
      id: "1002",
      rating: 2
    },
    {
      image: "https://www.myperfectcolor.com/repositories/images/assets/general/custom-spray-paint-min.png",
      title: "Custom Spray Paint",
      price: 5.99,
      description: "Customize your spray paint with your favorite colors and patterns.",
      id: "1003",
      rating: 5
    },
    {
      image: "https://m.media-amazon.com/images/I/71zjBoiPL+L.jpg",
      title: "Gamming table",
      price: 129.99,
      description: "A stylish and versatile gaming table that is perfect for playing games.",
      id: "1004",
      rating: 4
    },
    {
      image: "https://m.media-amazon.com/images/I/61UDx9jF0mL._AC_SL1315_.jpg",
      title: "bags",
      price: 100.99,
      description: "A stylish and versatile bags that is perfect for shopping.",
      id: "1005",
      rating: 5

    },
    {
      image: "https://i5.walmartimages.com/asr/dda6bc1f-d282-4cf9-ad29-e827222bc4d5.8d402328f4d54e2b9a252879ec51fb79.jpeg",
      title: "Apple Watch",
      price: 139.99,
      description: "A stylish and versatile Apple Watch that is perfect for wearing.",
      id: "1006",
      rating: 4
    },
    {
      image: "https://m.media-amazon.com/images/I/516y3sp4otL._SL1500_.jpg",
      title: "Cream",
      price: 6.99,
      description: "A cream that is perfect for baking, making pastries, ",
      id: "1007",
      rating: 5
    },
    {
      image: "https://minimotorsusa.com/cdn/shop/products/dualtron-thunder-3-electric-scooter-side.jpg?v=1678911955",
      title: "Electric Scooter",
      price: 299.99,
      description: "A stylish and versatile electric scooter that is perfect for traveling.",
      id: "1008",
      rating: 3
    },
    {
      image: "https://appleman.pk/cdn/shop/products/Alexa-Echo-Dot-1.jpg?v=1667406579",
      title: "Smart speaker",
      price: 199.99,
      description: "A stylish and versatile smart speaker that is perfect for listening to music.",
      id: "1009",
      rating: 5
    },
    {
      image: "https://cameratrader.ng/wp-content/uploads/2023/08/DJI-Mini-3-Pro-Drone-with-RC-Remote-Controller.jpeg",
      title: "Drone",
      price: 1499.99,
      description: "A stylish and versatile drone that is perfect for hiking, exploring, or foraging.",
      id: "1010",
      rating: 4
    },
    {
      image: "https://sunbeam-app-prod.s3.ap-southeast-2.amazonaws.com/large_BLE4821-sunbeam-sleep-express-electric-blanket-single-1340x1340_5ae08f8489.jpeg",
      title: "Sleeping Blanket",
      price: 139.99,
      description: "A stylish and versatile sleeping blanket that is perfect for relaxing.",
      id: "1011",
      rating: 4
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0545/3755/2071/files/uss-_1_1cb49dc5-dd53-488c-82c2-d67d31551c14_540x.jpg?v=1710527994",
      title: "Digital camera",
      price: 119.99,
      description: "A stylish and versatile digital camera that is perfect for capturing and sharing photos.",
      id: "1012",
      rating: 5
    },
    {
      image: "https://i5.walmartimages.com/seo/Ninja-4QT-Air-Fryer-Black-AF100WM_0907e796-99b3-4021-938b-9a2a44a12ab2.13d1211bf2d0ac49e5bd757201e593c7.png",
      title: "Air fryer",
      price: 199.99,
      description: "A stylish and versatile air fryer that is perfect for cooking.",
      id: "1013",
      rating: 4
    }
  ]
  const recentlyViewedList = [
    {
      image: "https://cameratrader.ng/wp-content/uploads/2023/08/DJI-Mini-3-Pro-Drone-with-RC-Remote-Controller.jpeg",
      title: "Drone",
      price: 1499.99,
      description: "A stylish and versatile drone that is perfect for hiking, exploring, or foraging.",
      id: "1010",
      rating: 4
    },
    {
      image: "https://www.myperfectcolor.com/repositories/images/assets/general/custom-spray-paint-min.png",
      title: "Custom Spray Paint",
      price: 5.99,
      description: "Customize your spray paint with your favorite colors and patterns.",
      id: "1003",
      rating: 5
    },
    {
      image: "https://m.media-amazon.com/images/I/71zjBoiPL+L.jpg",
      title: "Gamming table",
      price: 129.99,
      description: "A stylish and versatile gaming table that is perfect for playing games.",
      id: "1004",
      rating: 4
    },
    {
      image: "https://sunbeam-app-prod.s3.ap-southeast-2.amazonaws.com/large_BLE4821-sunbeam-sleep-express-electric-blanket-single-1340x1340_5ae08f8489.jpeg",
      title: "Sleeping Blanket",
      price: 139.99,
      description: "A stylish and versatile sleeping blanket that is perfect for relaxing.",
      id: "1011",
      rating: 4
    },
    {
      image: "https://jakcomputer.com/wp-content/uploads/2024/08/Lenovo-IDEAPAD-SLIM-5-16IRL8-82XFX003US-1-1.webp",
      title: "Lenovo",
      price: 900,
      description: "Stunning graphics and performance improvements for the latest",
      id: "1004",
      rating: 4
    },
    {
      image: "https://stonhartbeauty.com/cdn/shop/products/PREVENTION-_-clear_solar_gel_SPF_30_2000x.jpg?v=1677868245%5C",
      title: "Sunscreen",
      price: 29.99,
      description: "A stylish and versatile sunscreen that is perfect for wearing.",
      id: "1007",
      rating: 5
    },

  ];
  const electronicsProductList = [
    {
      image: "https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/0RfGklSa2HZ3YrRCCdA9DWBqPvb7bWAbpeMLo4Nq.png",
      title: "Apple MacBook Pro",
      price: 1800,
      description: "Supercharged for pros and cons for the world of Apple  Products",
      id: "1001",
      rating: 4
    },
    {
      image: "https://www.asus.com/media/Odin/Websites/global/Series/14.png",
      title: "Asus USA",
      price: 550,
      description: "Stunning graphics and performance improvements for the latest",
      id: "1002",
      rating: 4
    },
    {
      image: "https://m.media-amazon.com/images/I/51HkrsR0r+L.jpg",
      title: "MSI GL63",
      price: 1200,
      description: "Stunning graphics and performance improvements for the latest",
      id: "1003",
      rating: 4
    },
    {
      image: "https://jakcomputer.com/wp-content/uploads/2024/08/Lenovo-IDEAPAD-SLIM-5-16IRL8-82XFX003US-1-1.webp",
      title: "Lenovo",
      price: 900,
      description: "Stunning graphics and performance improvements for the latest",
      id: "1004",
      rating: 4
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzcI4gSnqn4qrGXQFwoyUKlwg7pXU3TG0bG4O-NB8su4Xkrx0AIwjcB7JZ8t7aRh-CPQ&usqp=CAU",
      title: "Huawei",
      price: 800,
      description: "Stunning graphics and performance improvements for the latest",
      id: "1005",
      rating: 5
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXwssRqOBIyaHaMfsA-vF1NLtz0nm1YirFA&s",
      title: "Asus tuf",
      price: 750,
      description: "Stunning graphics and performance improvements for the latest",
      id: "1006",
      rating: 4
    }

  ];
  const furnitureProductList = [
    {
      image: "https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-yellow-sofa-furniture-png-image_11548333.png",
      title: "Sofa",
      price: 129.99,
      description: "A stylish and versatile sofa that is perfect for relaxing.",
      id: "1007",
      rating: 4
    },
    {
      image: "https://tiimg.tistatic.com/fp/2/008/770/wooden-study-table-365.jpg",
      title: "Study's Table",
      price: 150,
      description: "A stylish and versatile wooden study table that is perfect for relaxing.",
      id: "1009",
      rating: 4
    },

    {
      image: "https://images.afw.com/images/thumbs/0112919_modern-office-chair.jpeg",
      title: "Office Chair",
      price: 59.99,
      description: "A stylish and versatile office chair that is perfect for relaxing.",
      id: "1008",
      rating: 4
    },

    {
      image: "https://images.thdstatic.com/productImages/ed5378f5-e035-4889-b21f-07dbf8d14e3b/svn/grey-and-natural-simpli-home-dining-chairs-axcmalw-g-64_600.jpg",
      title: "Simple Home Dining Chairs",
      price: 120,
      description: "A stylish and versatile home dining chairs that is perfect for relaxing.",
      id: "1010",
      rating: 3
    },
    {
      image: "https://www.modernnursery.com/cdn/shop/files/babyletto-palma-nightstand-with-usb-natural-walnut_7.jpg?v=1723213782&width=540",
      title: "Oak Bedside Tables",
      price: 100,
      description: "A stylish and versatile oak bedside tables that is perfect for relaxing.",
      id: "1011",
      rating: 4
    },
    {
      image: "https://www.safehaat.com/wp-content/uploads/2020/07/DTH-354-3-1-20.jpg",
      title: "Mirror Table",
      price: 50,
      description: "A stylish and versatile mirror table that is perfect for relaxing.",
      id: "1012",
      rating: 5

    },

  ]
  const beautyProductList = [
    {
      image: "https://i5.walmartimages.com/seo/CeraVe-Foaming-Facial-Cleanser-Daily-Face-Wash-for-Normal-to-Oily-Skin-12-fl-oz_aa5f597c-6326-4181-81fe-0ce6f9fa4757.15974fc89e53a988ba9d5aa7c7e188a4.jpeg",
      title: "CeraVe Foaming Facial Cleanser",
      price: 17,
      description: "A stylish and versatile foaming facial cleanser that is perfect for relaxing.",
      id: "1013",
      rating: 4
    },
    {
      image: 'https://m.media-amazon.com/images/I/516y3sp4otL._SL1500_.jpg',
      title: "Cream",
      price: 6.99,
      description: "A cream that is perfect for baking, making pastries, ",
      id: "1014",
      rating: 4
    },
    {
      image: "https://www.renskincare.com/cdn/shop/files/EverhydrateCream.png?v=1684765835&width=480",
      title: "Everhydrate Cream",
      price: 12,
      description: "A cream that is perfect for baking, making pastries, ",
      id: "1015",
      rating: 5
    },
    {
      image: "https://stonhartbeauty.com/cdn/shop/products/PREVENTION-_-clear_solar_gel_SPF_30_2000x.jpg?v=1677868245%5C",
      title: "sunscreen",
      price: 25,
      description: "A sunscreen that is perfect for baking, making pastries, ",
      id: "1016",
      rating: 4
    },
    {
      image: "https://www.garnier.in/-/media/project/loreal/brand-sites/garnier/apac/in/products/light-complete/vitamin-c-face-serum/vitamin-c-face-serum-30ml/8994993011421-01.jpg?rev=06db75db205d4c988281a2e6b3a74bda",
      title: "Garnier Vitamin C Face Serum",
      price: 25,
      description: "A stylish and versatile vitamin C face serum that is perfect for relaxing.",
      id: "1014",
      rating: 5
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_84F73JqAtcuVBJsDMDTsvBHiKIysa9ozMA&s",
      title: " Toner",
      price: 20,
      description: "A stylish and versatile toner that is perfect for relaxing.",
      id: "1015",
      rating: 3
    }
  ];
  const clothingProductList = [
    {
      image: "https://cdn.shopify.com/s/files/1/0996/1022/files/Pacifico_CoralMulti_1x1_2ed6f641-00b8-4304-b077-40f1b59090b0_533x.png?v=1715949746",
      title: "Bracelet",
      price: 15,
      description: "A stylish and versatile bracelet that is perfect for relaxing.",
      id: "1016",
      rating: 4
    },
    {
      image: "https://i5.walmartimages.com/asr/85e2cb5d-f4ea-493a-9353-2e09e9458eab.58b857ba61b7998dd02678f940c7e50a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      title: "Shirt",
      price: 10,
      description: "A stylish and versatile shirt that is perfect for relaxing.",
      id: "1017",
      rating: 5
    },
    {
      image:"https://cdna.lystit.com/300/375/tr/photos/asos/fa51b6d5/jack-jones-Blue-Denim-Alex-baggy-Jeans.jpeg",
      title: "Baggy Jeans",
      price: 15,
      description: "A stylish and versatile jeans that is perfect for relaxing.",
      id: "1018",
      rating: 5
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNahJiLCCFFSC7Wv0ufBg-hS5mDCADoCqJ1HGOQpB4tmBAPZOGLcL5OBPBbsU1izV8oA&usqp=CAU",
      title:"puma shoes",
      price: 20,
      description: "A stylish and versatile shoes that is perfect for relaxing.",
      id: "1019",
      rating: 4
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8UDq-Dz3-qNGLG5IR5fY-RHG_Xm3ggNm1Q&s",
      title:"Jacket",
      price: 25,
      description: "A stylish and versatile jacket that is perfect for relaxing.",
      id: "1020",
      rating: 3
    },
    {
      image:"https://t4.ftcdn.net/jpg/08/68/36/29/360_F_868362902_1tiwaqMypFUXJgUTEpvzv6NuR0R0Htuc.jpg",
      title:"Sweater",
      price: 20,
      description: "A stylish and versatile sweater that is perfect for relaxing.",
      id: "1021",
      rating: 4
    }
  ]

  const navigate = useNavigate()
  return (
    <div className=' '>
      <section className="px-md-5  px-2 ">

        <div className="row g-3 ">
          <div className="col-lg-12 col-xxl-9 ">
            <div style={{ height: "686px" }} className="bg-white rounded d-flex flex-column flex-lg-row justify-content-around ">
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
                <p className='text-muted '>Shopping here $1100</p>
                <h3 className='text-truncate'>iPhone 16 pro 128GB</h3>
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
        <div style={{ borderRadius: '5px' }} className='bg-white'>
          <div className='d-flex justify-content-between  px-xl-4 px-2 pt-4'>
            <h4>Explore Popular Brands</h4>
            <a className='text-muted' href="#">See all</a>
          </div>
          <hr />
          <div className='scroll-container'>
            {
              exploreBrandList.map((product, index) => (
                <div style={{ cursor: "pointer" }} key={index} className=''>
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
      {/* best seller */}
      <section className='px-md-5 pt-3 px-2'>
        <div style={{ borderRadius: '5px' }} className='bg-white'>
          <div className='d-flex justify-content-between px-xl-4 px-2 pt-4'>
            <h4>Best Seller in the Month</h4>
            <div>
              <a className='text-muted d-none d-md-inline' href="#">Categories</a>
              <a className='text-muted text-decoration-none px-3 d-none d-md-inline' href="#">Toys</a>
              <a className='text-muted text-decoration-none px-3 d-none d-md-inline' href="#">Sports</a>
              <a className='text-muted text-decoration-none px-3 d-none d-md-inline' href="#">Electronics</a>
              <a className='text-muted text-decoration-none ps-2' href="#">All</a>
            </div>
          </div>
          <hr />
          <div className='d-flex flex-wrap justify-content-between'>
            {bestSellerList.map((product, index) => (
              <div style={{ cursor: "pointer" }} key={index} className='col-6 col-md-4 col-lg-2 mb-4'>
                <div className='px-xl-4 px-2'>
                  <img className='img-fluid' src={product.image} alt={product.title} />
                  <p className='text-truncate product-title'>{product.title}</p>
                  <p className='text-muted text-truncate-2 product-description'>{product.description}</p>
                  <div className='d-flex'>
                    {[...Array(product.rating)].map((_, index) => (
                      <span class="text-warning" key={index}>★</span>
                    ))}
                    <p className='text-primary'>{product.id}</p>
                  </div>
                  <p className='fw-bold mt-1 product-price'>${Number(product.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* electronics product */}

      <section class="electronics-products px-md-5 pt-3 px-2">
        <div style={{ borderRadius: "5px" }} class="bg-white">
          <div class="d-flex justify-content-between px-xl-4 px-2 pt-4">
            <h4>Electronics Products</h4>
            <div>
              <a class="text-muted   px-3 d-none d-md-inline">Laptops</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">Smartphones</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">Gaming</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">TVs</a>
              <a class="text-muted text-decoration-none d-none d-md-inline" href="#">Tablets</a>
              <a class="text-muted text-decoration-none ps-3" href="#">All</a>
            </div>
          </div>
          <hr />
          <div class="d-flex flex-wrap p-xxl-4 p-2">
            <div class="featured-product-static col-12 col-xxl-2">
              <div class="product-image-container-static position-relative">
                <div className="product-image-container-static">
                  <img
                    className="product-image-static img-fluid rounded"
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
                    alt="Beats Studio Buds"
                  />
                </div>
                <div class="product-details-static position-absolute" style={{ top: "5%", left: "5%" }} >
                  <p className='text-primary-blue'>Devices</p>
                  <h5>Beats Studio Buds</h5>
                  <a class="shop-link text-decoration-none text-dark">
                    <span className="underline-shop">Shop</span>&nbsp;&nbsp;Here
                  </a>

                </div>
              </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center col-12 col-xxl-10 ps-xxl-5 ">
              {electronicsProductList.map((product, index) => (
                <div style={{ cursor: "pointer" }} key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                  <div className="product-card px-xl-4 px-2">
                    <div className="product-thumbnail ">
                      <img className="product-image img-fluid" src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details text-center text-md-start">
                      <p className="product-title text-truncate">{product.title}</p>
                      <p className="product-description text-muted text-truncate-2">{product.description}</p>
                      <div className="d-flex align-items-center justify-content-center align-items-md-start justify-content-md-start  ">
                        {[...Array(product.rating)].map((_, index) => (
                          <span className="text-warning" key={index}>★</span>
                        ))}
                        <p className="text-primary ms-1">{product.id}</p>
                      </div>
                      <p className="product-price fw-bold mt-1">${Number(product.price).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* Furniture products  */}

      <section class="electronics-products px-md-5 pt-3 px-2">
        <div style={{ borderRadius: "5px" }} class="bg-white">
          <div class="d-flex justify-content-between px-xl-4 px-2 pt-4">
            <h4>Furniture Products</h4>
            <div>
              <a class="text-muted   px-3 d-none d-md-inline">Soft & SmartDesk</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">Office</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">PatioSet</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">Bad</a>
              <a class="text-muted text-decoration-none ps-3" href="#">All</a>
            </div>
          </div>
          <hr />
          <div class="d-flex flex-wrap p-xxl-4 p-2">
            <div class="featured-product-static col-12 col-xxl-2">
              <div class="product-image-container-static position-relative">
                <div className="product-image-container-static">
                  <img
                    className="product-image-static img-fluid rounded"
                    src="https://t3.ftcdn.net/jpg/02/71/05/60/360_F_271056073_C0tbpNLFbcGurqxoMXqPBrx8vzL9VLVY.jpg"
                    alt="Beats Studio Buds"
                  />
                </div>
                <div class="product-details-static position-absolute" style={{ top: "5%", left: "5%" }} >
                  <p className='text-primary-blue'>New arrival</p>
                  <h5>Modern finds <br /> from $40</h5>
                  <a class="shop-link text-decoration-none text-dark">
                    <span className="underline-shop">Shop</span>&nbsp;&nbsp;Here
                  </a>

                </div>
              </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center col-12 col-xxl-10 ps-xxl-5 ">
              {furnitureProductList.map((product, index) => (
                <div style={{ cursor: "pointer" }} key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                  <div className="product-card px-xl-4 px-2">
                    <div className="product-thumbnail ">
                      <img className="product-image img-fluid" src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details text-center text-md-start">
                      <p className="product-title text-truncate">{product.title}</p>
                      <p className="product-description text-muted text-truncate-2">{product.description}</p>
                      <div className="d-flex align-items-center justify-content-center align-items-md-start justify-content-md-start  ">
                        {[...Array(product.rating)].map((_, index) => (
                          <span className="text-warning" key={index}>★</span>
                        ))}
                        <p className="text-primary ms-1">{product.id}</p>
                      </div>
                      <p className="product-price fw-bold mt-1">${Number(product.price).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* Healthy & Beauty products */}

      <section class="electronics-products px-md-5 pt-3 px-2">
        <div style={{ borderRadius: "5px" }} class="bg-white">
          <div class="d-flex justify-content-between px-xl-4 px-2 pt-4">
            <h4>Healthy & Beauty products</h4>
            <div>
              <a class="text-muted   px-3 d-none d-md-inline">Skincare</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">Haircare</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">Medical</a>
              <a class="text-muted text-decoration-none ps-3" href="#">All</a>
            </div>
          </div>
          <hr />
          <div class="d-flex flex-wrap p-xxl-4 p-2">
            <div class="featured-product-static col-12 col-xxl-2">
              <div class="product-image-container-static position-relative">
                <div className="product-image-container-static">
                  <img
                    className="product-image-static img-fluid rounded"
                    src="https://c8.alamy.com/comp/2AY9R46/beauty-skin-care-concept-beautiful-caucasian-woman-face-portrait-beautiful-beauty-young-female-model-girl-smooth-cleaning-her-2AY9R46.jpg"
                    alt="Beats Studio Buds"
                  />
                </div>
                <div class="product-details-static position-absolute" style={{ top: "5%", left: "5%" }} >
                  <p className='text-primary-blue'>Hydra Glow</p>
                  <h5>Beauty & <br /> Wellness<br /> Guide</h5>
                  <a class="shop-link text-decoration-none text-dark">
                    <span className="underline-shop">Shop</span>&nbsp;&nbsp;Here
                  </a>

                </div>
              </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center col-12 col-xxl-10 ps-xxl-5 ">
              {beautyProductList.map((product, index) => (
                <div style={{ cursor: "pointer" }} key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                  <div className="product-card px-xl-4 px-2 pt-xxl-0 pt-2">
                    <div className="product-thumbnail ">
                      <img className="product-image img-fluid" src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details text-center text-md-start">
                      <p className="product-title text-truncate">{product.title}</p>
                      <p className="product-description text-muted text-truncate-2">{product.description}</p>
                      <div className="d-flex align-items-center justify-content-center align-items-md-start justify-content-md-start  ">
                        {[...Array(product.rating)].map((_, index) => (
                          <span className="text-warning" key={index}>★</span>
                        ))}
                        <p className="text-primary ms-1">{product.id}</p>
                      </div>
                      <p className="product-price fw-bold mt-1">${Number(product.price).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* Clothing  products */}

      <section class="electronics-products px-md-5 pt-3 px-2">
        <div style={{ borderRadius: "5px" }} class="bg-white">
          <div class="d-flex justify-content-between px-xl-4 px-2 pt-4">
            <h4>Clothing  products</h4>
            <div>
              <a class="text-muted   px-3 d-none d-md-inline">Outfits</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">T-shirt</a>
              <a class="text-muted text-decoration-none px-3 d-none d-md-inline">Jeans</a>
              <a class="text-muted text-decoration-none ps-3" href="#">All</a>
            </div>
          </div>
          <hr />
          <div class="d-flex flex-wrap p-xxl-4 p-2">
            <div class="featured-product-static col-12 col-xxl-2">
              <div class="product-image-container-static position-relative">
                <div className="product-image-container-static">
                  <img
                    className="product-image-static img-fluid rounded"
                    src="https://img.freepik.com/free-photo/still-life-hanging-bag_23-2151009066.jpg"
                    alt="Beats Studio Buds"
                  />
                </div>
                <div class="product-details-static position-absolute" style={{ top: "5%", left: "5%" }} >
                  <p className='text-primary-blue'>Fashion</p>
                  <h5>Memorial Day<br /> Savings</h5>
                  <a class="shop-link text-decoration-none text-dark">
                    <span className="underline-shop">Shop</span>&nbsp;&nbsp;Here
                  </a>

                </div>
              </div>
            </div>

            <div class="d-flex flex-wrap justify-content-between align-items-center col-12 col-xxl-10 ps-xxl-5 ">
              {clothingProductList.map((product, index) => (
                <div style={{ cursor: "pointer" }} key={index} className="col-6 col-md-4 col-lg-2 mb-4">
                  <div className="product-card px-xl-4 px-2 pt-xxl-0 pt-2">
                    <div className="product-thumbnail ">
                      <img className="product-image img-fluid" src={product.image} alt={product.title} />
                    </div>
                    <div className="product-details text-center text-md-start">
                      <p className="product-title text-truncate">{product.title}</p>
                      <p className="product-description text-muted text-truncate-2">{product.description}</p>
                      <div className="d-flex align-items-center justify-content-center align-items-md-start justify-content-md-start  ">
                        {[...Array(product.rating)].map((_, index) => (
                          <span className="text-warning" key={index}>★</span>
                        ))}
                        <p className="text-primary ms-1">{product.id}</p>
                      </div>
                      <p className="product-price fw-bold mt-1">${Number(product.price).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>




      {/* exlpore category */}
      <section className='px-md-5 pt-3 px-2 '>
        <div style={{ borderRadius: '5px' }} className='bg-white'>
          <div className='d-flex justify-content-between  px-xl-4 px-2 pt-4'>
            <h4>Explore Popular Categories</h4>
            <a className='text-muted' href="#">See all</a>
          </div>
          <hr />
          <div className='scroll-container'>
            {
              exploreCategorieList.map((product, index) => (
                <div style={{ cursor: "pointer" }} key={index} className=''>
                  <div className='item-container '>
                    <img className='img-fluid' src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Recently viewed */}
      <section className='px-md-5 pt-3 px-2'>
        <div style={{ borderRadius: '5px' }} className='bg-white'>
          <div className='d-flex justify-content-between px-xl-4 px-2 pt-4'>
            <h4>Recently Viewed</h4>
            <div>
              <a className='text-muted d-none d-md-inline' href="#">Categories</a>
              <a className='text-muted text-decoration-none px-3 d-none d-md-inline' href="#">Toys</a>
              <a className='text-muted text-decoration-none px-3 d-none d-md-inline' href="#">Sports</a>
              <a className='text-muted text-decoration-none px-3 d-none d-md-inline' href="#">Electronics</a>
              <a className='text-muted text-decoration-none ps-2' href="#">All</a>
            </div>
          </div>
          <hr />
          <div className='d-flex flex-wrap justify-content-between'>
            {
              recentlyViewedList.map((product, index) => (
                <div style={{ cursor: "pointer" }} key={index} className='col-6 col-md-4 col-lg-2 mb-4'>
                  <div className='px-xl-4 px-2'>
                    <img className='img-fluid' src={product.image} alt={product.title} />
                    <p className='text-truncate product-title'>{product.title}</p>
                    <p className='text-muted text-truncate-2 product-description'>{product.description}</p>
                    <div className='d-flex'>
                      {[...Array(product.rating)].map((_, index) => (
                        <span class="text-warning" key={index}>★</span>
                      ))}
                      <p className='text-primary'>{product.id}</p>
                    </div>
                    <p className='fw-bold mt-1 product-price'>${Number(product.price).toFixed(2)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className='bg-white py-2 mt-3'>
        <hr />
          <div className='text-center '>
              <p className='product-description text-dark'>Set personalized recommendation</p>
               <button style={{padding:"0px 100px 0px 100px "}} className='btn-warning btn btn-sm'
               onClick={()=>{
                 // Navigate to SignIn page
                 navigate("/signin")
 
               }}
               >Sign in</button>
               <div className='d-flex justify-content-center pt-2'>
                  <p style={{fontSize:"12px"}}>New customer?</p>
                  <a  style={{fontSize:"12px",cursor:"pointer"}} className='text-derotation-none ' 
                   onClick={()=>{
                     // Navigate to SignUp page
                     navigate("/signup")
                   }}
                  >Start here</a>
               </div>
          </div>
          <hr />
      </section>
    </div>
  );
};

export default HomePage;
