import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/TermsConditionStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const TermsConditionsPage = () => {
  let navigate = useNavigate()
  return (
    <>
      <section style={{ fontSize: "15px", marginLeft: "12px" }} className=' d-flex p-md-5 pt-2 '>

        <p style={{ cursor: "pointer" }} className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            // Navigate to Home page
            navigate("/")
          }}
        >Home</p> <p><FontAwesomeIcon style={{ width: "30px" }} className=' font-style text-muted' icon={faAngleRight} /> Terms-conditions</p>
      </section>
      <section className='  ms-xxl-5 '>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Terms & Conditions
          </h2>
          <p className='py-4 pe-md-5'>
            By using CamboShop, you agree to these terms and conditions, claiming conditions & policies, and refund & reversal policies of the site. Please read the Terms and Conditions carefully before using CamboShop. <br /><br />

            Order claims differ based on the respective product supplier. Since iShopping.pk is a marketplace platform, we do not offer any warranty claims directly to the customer.
            The customer must follow the terms and conditions closely to register a claim against a product.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Official Brand Warranty
          </h2>
          <ul className='py-5'>
            <li>The terms and conditions for official warranty are mentioned on its warranty card.</li>
            <li>CamboShop will not be liable for any claims.</li>
            <li>The product's warranty will be claimed by their respective brand's service centers.</li>
          </ul></div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Warranty to be Claimed within 24 Hours
          </h2>
          <ul className='pt-4 py-2'>
            <li>iShopping offers a duration of 24-hours to claim the warranty of a product. The customer must report any manufacturing defects within 24 hours of delivery of the product.
            </li>
          </ul>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Official Brand Warranty
          </h2>
          <ul className='py-5'>
            <li>Any claim reported after 24 hours of delivery will not be entertained.</li>
            <li>Any damage to the product after delivery will not be claimable by CamboShop.</li>
            <li>Unbranded products are not claimable.</li>
            <li>Change of mind regarding the product will not be entertained.</li>
            <li>Company cannot be held responsible for medical products & supplements that cause healthcare issues. It is advised that the customer practice due care before purchasing of such products and consult medical professionals before purchase or consumption. </li>
            <li>Any product with official warranty will not be claimable by CamboShop. The customer will have to contact the number provided on the official warranty card.</li>
            <li>International Warranty products are not entertained by CamboShop.</li>
          </ul>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Claiming Terms and Conditions
          </h2>
          <ul className='py-5'>
            <li>Any product claims should be reported within 24 hours of delivery of the product.</li>
            <li>Customers has to share pictures and elaborate videos of the issue faced along with a picture of the invoice.</li>
            <li>In case of damaged product customer must report the issue within 1 hour of delivery / or at the time of delivery (for Karachi only).</li>
            <li>Once the claim has been forwarded to the relevant department the claims department will respond to the customer within 2-4 Working days.</li>
            <li>If the customer has received the wrong product, it will be exchanged if reported within 24 hours of delivery. </li>
            <li>The customer should send the pictures and videos of the products via WhatsApp 0328-2898-807, & email us at sales@CamboShop.com</li>
            <li>All claims will be investigated by the vendor and our quality control team.</li>
            <li>Valid claims will be eligible for a replacement.  </li>
            <li>If the product is no longer available for exchange by the vendor, customer’s payment will be returned to them via refund or reversal method.</li>
            <li>Customer cannot opt for payment return.</li>
          </ul>
          <p className="fw-bold">Recommendation  </p>
          <p>Customer should make a parcel unboxing video of the product as solid proof or evidence.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Refunds & Reversals
          </h2>
          <p className='py-4 pe-md-5'>
            The procedure for refunds and reversals is as follows:</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Refund
          </h2>
          <p className='py-4 pe-md-5'>
            Bank account details will be required form the customer in <strong>written format.</strong>  Timeline for completion of the refund is <strong className=''>4-6 working days.</strong>  Details required are as follows:</p>
          <ul >
            <li>Order ID Number</li>
            <li>Customer Name</li>
            <li>Bank Title</li>
            <li>Bank Name</li>
            <li>Account Number</li>
            <li>IBAN</li>
            <li>Branch Address</li>
            <li>Branch Code</li>
            <li>Refund Amount</li>
            <li>Contact Number</li>
          </ul>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Third Parties and Links
          </h2>
          <p className='py-4 pe-md-5'>
            We may pass your details to other companies in our group. We may also pass your details to our agents and subcontractors to help us with any of our uses of your data set out in our Privacy Policy. For example, we may use third parties to assist us with delivering products to you, to help us to collect payments from you, to analyze data and to provide us with marketing or customer service assistance. <br /><br />

            We may exchange information with third parties for the purposes of fraud protection and credit risk reduction. We may transfer our databases containing your personal information if we sell our business or part of it. Other than as set out in this Privacy Policy, we shall NOT sell or disclose your personal data to third parties without obtaining your prior consent unless this is necessary for the purposes set out in this Privacy Policy or unless we are required to do so by law. The Site may contain advertising of third parties and links to other sites or frames of other sites. Please be aware that we are not responsible for the privacy practices or content of those third parties or other sites, nor for any third party to whom we transfer your data in accordance with our Privacy Policy.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
          Reversal
          </h2>
          <p className='py-4 pe-md-5'>
          Payments done via credit/debit cards will be returned via reversal method. Payment reversal will be completed within 17 to 25 working days.
</p>
        </div>
      </section>
    </>
  )
}

export default TermsConditionsPage