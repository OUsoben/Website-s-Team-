import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/ServiceStyle.css"
import { faAngleRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

const CustomerServicePage = () => {
  let navigate = useNavigate()

  const services = [
    { icon: 'https://cdn-icons-png.flaticon.com/512/2110/2110641.png', title: 'Custom E-Commerce Development' },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png', title: 'Payment Processing Solutions' },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2._CB432205751_.png', title: 'Social Media Management' },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2._CB432205751_.png', title: 'Logistics and Fulfillment' },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png', title: 'Memberships, Subscriptions or Communications' },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/accessibility._CB653395151_.png', title: 'Accessibility' },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png', title: 'Address, Security & Privacy' },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/suspicious-emails._CB649253146_.png', title: 'Report Something Suspicious' },
    {
      icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/Login_Icon_2._CB618207853_.png', title:
        'Login & password'
    },
    { icon: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png', title: 'Something Else' }
  ];
  return (
    <>

      <section style={{ fontSize: "15px", marginLeft: "12px" }} className=' d-flex p-md-5 pt-2 '>

        <p style={{ cursor: "pointer" }} className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            // Navigate to Home page
            navigate("/")
          }}
        >Home</p> <p><FontAwesomeIcon style={{ width: "30px" }} className=' font-style text-muted' icon={faAngleRight} /> Customer Service</p>
      </section>
      {/* first content  */}
      <section className=''>
        <div className='d-flex flex-column flex-xxl-row  px-sm-5 px-4 py-4 '>
          <div className='col-xxl-4 ps-xxl-5 ms-md-5 '>
            <h1>Welcome to CamboShop  Your One-Stop <span className='text-warning'>Solutions </span>for Online Retail Success</h1>
            <p className='pt-4'>   we understand the unique challenges faced by online retailers. That's why we offer a suite of comprehensive e-commerce services designed to help your business thrive in the digital marketplace. Whether you're just starting out or looking to scale, we have the tools and expertise you need to succeed.</p>
            <button className='btn btn-warning mt-4 px-4 py-2'> Get started</button>
          </div>
          <div className='col-xxl-7 text-center'>
            <img className='img-fluid' src="https://cdn3d.iconscout.com/3d/premium/thumb/team-working-on-business-startup-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--collaborative-effort-entrepreneurial-venture-development-coordination-pack-illustrations-7190581.png" alt="" />
          </div>
        </div>
      </section>


      {/* Our services content */}

      <section className="bg-puple py-5">
        <div className="container text-center text-white mb-4">
          <h5>OUR SERVICES</h5>
          <p>What would you like help with today? You can quickly take care of most things here, or connect with us when needed.</p>
        </div>
        <div className="container">
          <div style={{ cursor: "pointer" }} className="row">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                <div className="service-card p-3 h-100 d-flex flex-row align-items-center justify-content-start bg-white border rounded">
                  <img src={service.icon} alt={service.title} className="mb-2" style={{ height: '60px' }} />
                  <p className="mb-0 ps-2">{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className='d-flex flex-column flex-xxl-row  px-xxl-5 px-4 py-4 container'>

          <img className='img-fluid' src="https://cdn3d.iconscout.com/3d/premium/thumb/man-on-phone-while-sitting-couch-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--calling-call-business-remote-working-pack-illustrations-6648974.png?f=webp" alt="" />
          <div className=" order-1  pt-4">
            <h2 className=' py-3'>Why Choose CamboShop?</h2>
            <ul className=''>
              <span className='text-muted'>
                <FontAwesomeIcon icon={faCheck} color='orange' />
                <span className=' fw-bold text-dark ps-2'>Expert Team : </span>
                Our team of experienced professionals is dedicated to helping your business grow.
              </span>
            </ul>
            <ul>
              <span className='text-muted'>
                <FontAwesomeIcon icon={faCheck} color='orange' /><span className='text-dark fw-bold ps-2'>Tailored Solutions: </span> We understand that every business is unique. Our solutions are customized to meet your specific needs..</span>
            </ul>
            <ul>
              <span className='text-muted'>
                <FontAwesomeIcon icon={faCheck} color='orange' /><span className='text-dark fw-bold ps-2'>Proven Results: </span> We have a track record of helping businesses achieve significant growth and success in the e-commerce space.</span>

            </ul>
            <ul>
              <span className='text-muted'>
                <FontAwesomeIcon icon={faCheck} color='orange' /><span className='text-dark fw-bold ps-2'>Continuous Support: </span> We provide ongoing support to ensure your online store remains competitive and up-to-date.</span>

            </ul>
            <ul className=''>
              <button className='btn btn-warning mt-4 px-4 py-2 '> Get started</button>

            </ul>

          </div>

        </div>
      </section>

    </>
  )
}

export default CustomerServicePage