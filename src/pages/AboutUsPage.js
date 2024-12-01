import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/AboutUsStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutUsPage = () => {
  const teamMembers = [
    { name: 'OU Soben', role: 'UXUI Designer & Web Developer', imgSrc: 'https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=' },
    { name: 'Saron Makara', role: "Web Designer & Member", imgSrc: 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' },
    { name: 'Savit Oeun', role: 'Web Designer & Member', imgSrc: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg' },
    { name: 'MENG VINA', role: 'Frontend Developer & Member', imgSrc: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' },
    { name: 'YI Sokhmany', role: 'SEO & Member', imgSrc: 'https://thumbs.dreamstime.com/b/happy-young-man-wearing-blue-hoodie-showing-ok-gesture-camera-cheerful-guy-eyeglasses-gesturing-sign-approval-saying-i-m-310444277.jpg' },
    { name: 'Menghuy PON', role: 'Frontend Developer & member', imgSrc: 'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg' },
    { name: 'Noun Karona', role: 'UXUI Designer & member', imgSrc: 'https://media.istockphoto.com/id/1520199253/photo/tablet-asian-man-and-smile-portrait-in-a-studio-on-social-media-internet-and-website-app.jpg?s=612x612&w=0&k=20&c=6aldn113R922VcBN7L-xfIs6CIL5kwD7cKpX6EqMdp0=' },
    { name: 'SAMETH NIPANHA', role: 'Frontend Developer & member', imgSrc: 'https://media.istockphoto.com/id/1272208630/photo/this-is-me-portrait-of-self-confident-narcissistic-man-in-worker-denim-shirt-smiling.jpg?s=612x612&w=0&k=20&c=HNgMmVBxVEbUKkXD0MaxzD3yVQs-eFYpysJ8N_lvELw=' },
    
    { name: 'Loeng Navin', role: 'Web Designer & member', imgSrc: 'https://st4.depositphotos.com/12982378/38366/i/450/depositphotos_383665980-stock-photo-thoughtful-young-man-pointing-finger.jpg' },
    { name: 'Srey Savat', role: 'Frontend Developer & member', imgSrc: 'https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg' },
   
  ];

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
      <section className=" pt-5">
        <div className='text-center my-3'>
      <h2 className="text-decoration-none text-dark underline-us ">Our Teams</h2>
      </div>
        <Container>
       
          <Row className="pt-4 d-flex justify-content-center">
            {teamMembers.map((member, index) => (
              <Col key={index} md={4} sm={6} xs={12} xxl={3} className="mb-4">
                <Card>
                  <div className='team-image-container'>
                  <Card.Img variant="top" src={member.imgSrc}  className="team-image"/>
                  </div>
                  <Card.Body>
                    <p>{member.name}</p>
                    <Card.Text className='text-muted text-truncate'>{member.role}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default AboutUsPage