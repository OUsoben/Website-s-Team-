import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/AboutUsStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const AboutUsPage = () => {
  let navigate = useNavigate();
  return (
    <div className='pb-5'>
      <section style={{ fontSize: "15px", marginLeft: "12px" }} className=' d-flex p-md-5 pt-2 '>

        <p style={{ cursor: "pointer" }} className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            // Navigate to Home page
            navigate("/")
          }}
        >Home</p> <p><FontAwesomeIcon style={{ width: "30px" }} className=' font-style text-muted' icon={faAngleRight} /> About Us</p>
      </section>

      <section className='  ms-xxl-5 '>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            About Us
          </h2>
          <p className='py-4 pe-md-5'>
            Founded in the year 2024, ComboShop has grown up as the leading online shopping store offering a wide range of products from more than 10,000+ world's leading brands. We have origins as an independent online store for all luxury shopping needs.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            What is CamboShop?
          </h2>
          <p className='py-4 pe-md-5'>
            CamboShop is an online marketplace that brings you the most popular branded merchandise comprising of the latest and advanced level of products and gadgets. Our platform contains an impressive range of mobile phones, tablets, laptops, women's fashion, men's fashion, TVs & DVDs, gaming consoles and games, home & living products like home appliances, kitchen appliances, apparel & clothing, shoes & footwear, fashion accessories and jewellery, beauty and cosmetics, baby care, home decor and furniture, books, sports goods and much more. Trust us when we tell you this, we are barely scratching the surface in naming our extensive line of product categories.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Why  CamboShop?
          </h2>
          <p className='py-4 pe-md-5'>
            With the existence of various shopping platforms popping up online, providing more or less the same products at the same prices, it has become very difficult for consumers to decide upon their platform of choice. CamboShop helps you with making a better and informed decision. We have something more to offer than good products at reasonable prices and that is the service level. A lot of companies are in the business of selling but we help our valuable customers by providing a personalized level of pre sales and after-sales support unmatched by any of our competitors.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            How do we facilitate our valued customers?
          </h2>
          <p className='py-4 pe-md-5'>
            We are quick to respond to our customers in the shortest possible time via whatever medium of communication they have chosen. Our offer on almost immediate returns on defected or damaged merchandise during transit allows you to feel as comfortable as if you were choosing goods from your own shop.
            Our philosophy is very simple: “Treat someone as you would like to be treated yourself”. Our staff first unlearns their existing customer service knowledge and then relearns it our way; the ‘PhsarKhmer’ way. This ensures us to be able to sell world-class branded products coupled with the most convenient and effective service. Shop now with us and feel the difference!
            Happy CamboShop!</p>
        </div>
      </section>
      <section>
        <div className='text-center pt-5'>
      <h2 className="underline-us text-decoration-none text-dark ">
            Our Teams
          </h2>
          </div>
      </section>
    </div>
  )
}

export default AboutUsPage