import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/PrivacyPolicyStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const PrivacyPolicyPage = () => {
  let navigate = useNavigate()
  return (
    <>
      <section style={{ fontSize: "15px", marginLeft: "12px" }} className=' d-flex p-md-5 pt-2 '>

        <p style={{ cursor: "pointer" }} className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            // Navigate to Home page
            navigate("/")
          }}
        >Home</p> <p><FontAwesomeIcon style={{ width: "30px" }} className=' font-style text-muted' icon={faAngleRight} /> Privacy Policy</p>
      </section>
      <section className='  ms-xxl-5 '>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Privacy & Confidentiality
          </h2>
          <p className='py-4 pe-md-5'>
            CamboShop is operated by JW & FA Companies PVT Limited (Registration Number: ‘0114555’). We respect your privacy and want to protect your personal information. To learn more, please read our privacy policy. <br /><br />

            This Privacy Policy explains how we collect, use and (under certain conditions) disclose your personal information. Our privacy policy explains your options regarding the collection, use and disclosure of your personal information. By visiting the site directly or through another site, you accept the practices described in this policy. <br /> <br />

            Data protection is a matter of trust and your privacy is extremely important to us. We shall therefore only use your name and other information which relates to you in the manner set out in this Privacy Policy. We will only collect information where it is necessary for us to do so and we will only collect information if it is relevant to our dealings with you. <br /> <br />

            We will only keep your information for as long as we are either required to by law or as is relevant for the purposes for which it was collected.You can visit the Site and browse without having to provide personal details. During your visit to the Site you remain anonymous and at no time can we identify you unless you have an account on the Site and log on with your user name and password.</p> <br />
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            1. Data that we collect
          </h2>
          <p className='py-4 pe-md-5'>
            We may collect various pieces of information if you seek to place an order on the site. <br /> <br />

            We collect, store, and process your data for processing your purchase on the site and any possible later claims, and to provide you with the best of our services. We may collect personal information including – but not limited to – your title, name, email address, postal address, delivery address (if different), telephone number, mobile number, payment details or bank account details.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            2. We put your precious information to good use
          </h2>
          <p className='py-4 pe-md-5'>
            We will use the information you provide to enable us to process your orders, provide you with our services and information. Further, we will use the information you provide to determine the following;
          </p>

          <ul className='col-xxl-8 '>
            <li>Administer your account with us</li>
            <li>Verify and carry out financial transactions in relation to payments you make.</li>
            <li>Audit the downloading of data from our website</li>
            <li>Improve the layout and/or content of the pages of our website and customize them for users.</li>
            <li>Identify visitors on our website.</li>
            <li>Send you information we think you may find useful or which you have requested from us, including information about our products and services, provided you have indicated that you have not objected to being contacted for these purposes.</li>
            <br />
          </ul>
          <p className='py-4 pe-md-5'>
            Subject to obtaining your consent we may contact you by email with details of other products and services. If you prefer not to receive any marketing communications from us, you can opt out at any time. <br /><br />

            We may pass your name and address on to a third party (for example to our courier or supplier) to make delivery of the product to you. You must only submit the site information which is accurate and not misleading and you must keep it up to date and inform us of any changes. <br /><br />

            Your actual order details may be stored with us but for security reasons cannot be retrieved directly by us. However, you may access this information by logging into your account on the site. Here you can view the details of your orders that have been completed, pending and/or those which are shortly to be dispatched, and administer your address details, bank details (for refund purposes) and any newsletter to which you may have subscribed. You undertake to treat the personal access data confidentially and not make it available to unauthorized third parties. We cannot assume any liability for misuse of passwords unless this misuse is our fault.
            <br /><br />
          </p>

        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            3. Other uses of your personal information
          </h2>
          <p className='py-4 pe-md-5'>
            3. Other uses of your personal information
            We may use your personal information for opinion and market research. Your details are anonymous and will only be used for statistical purposes. You can choose to opt out of this at any time. Any answers to surveys or opinion polls we may ask you to complete will not be forwarded on to third parties. Disclosing your email address is only necessary if you would like to take part in competitions. We save the answers to our surveys separately from your email address. <br /> <br />

            We may also send you other information about us, our site, our other websites, our products, sales promotions, our newsletters, or anything relating to other companies in our group or our business partners. If you prefer not to receive any of this additional information (or any part of it) please click the 'unsubscribe' link for emails that you no longer want to receive. Within 7 working days (days which are neither (i) a Sunday, nor (ii) a public holiday anywhere in Pakistan) of receipt of your instruction we will cease to send you information as requested. If your instruction is unclear, we will contact you for clarification. <br /><br />

            We may further anonymize data about users of the site generally and use it for various purposes, including ascertaining the general location of the users and usage of certain aspects of the site or a link contained in an email to those registered to receive them, and supplying that anonymized data to third parties such as publishers. However, that anonymized data will not be capable of identifying you personally.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Competitions
          </h2>
          <p className='py-4 pe-md-5'>
            For any competition we use the data to notify winners and advertise our offers. You can find more details where applicable in our participation terms for the respective competition.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Third Parties and Links
          </h2>
          <p className='py-4 pe-md-5'>
            We may pass your details to other companies in our group. We may also pass your details to our agents and subcontractors to help us with any of our uses of your data set out in our Privacy Policy. For example, we may use third parties to assist us with delivering products to you, to help us to collect payments from you, to analyze data and to provide us with marketing or customer service assistance.
            <br /><br />

            We may exchange information with third parties for the purposes of fraud protection and credit risk reduction. We may transfer our databases containing your personal information if we sell our business or part of it. Other than as set out in this Privacy Policy, we shall NOT sell or disclose your personal data to third parties without obtaining your prior consent unless this is necessary for the purposes set out in this Privacy Policy or unless we are required to do so by law. The Site may contain advertising of third parties and links to other sites or frames of other sites. Please be aware that we are not responsible for the privacy practices or content of those third parties or other sites, nor for any third party to whom we transfer your data in accordance with our Privacy Policy.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            4. Cookies
          </h2>
          <p className='py-4 pe-md-5'>
            We may pass your details to other companies in our group. We may also pass your details to our agents and subcontractors to help us with any of our uses of your data set out in our Privacy Policy. For example, we may use third parties to assist us with delivering products to you, to help us to collect payments from you, to analyze data and to provide us with marketing or customer service assistance. <br /><br />

            We may exchange information with third parties for the purposes of fraud protection and credit risk reduction. We may transfer our databases containing your personal information if we sell our business or part of it. Other than as set out in this Privacy Policy, we shall NOT sell or disclose your personal data to third parties without obtaining your prior consent unless this is necessary for the purposes set out in this Privacy Policy or unless we are required to do so by law. The Site may contain advertising of third parties and links to other sites or frames of other sites. Please be aware that we are not responsible for the privacy practices or content of those third parties or other sites, nor for any third party to whom we transfer your data in accordance with our Privacy Policy.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
            Trackers
          </h2>
          <p className='py-4 pe-md-5'>
            This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses cookies, which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States. Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
          5. Security
          </h2>
          <p className='py-4 pe-md-5'>
          We have appropriate technical and security measures in place to prevent unauthorized or unlawful access to or accidental loss of or destruction or damage to your information. When we collect data through the Site, we collect your personal details on a secure server. We use firewalls on our servers. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you. You are responsible for protecting against unauthorized access to your password and to your computer.</p>
        </div>
        <div className='ps-md-5 px-3'>
          <h2 className="underline-us text-decoration-none text-dark ">
          6. Your rights
          </h2>
          <p className='py-4 pe-md-5'>
          If you are concerned about your data, you have the right to request access to the personal data which we may hold or process about you. You have the right to require us to correct any inaccuracies in your data free of charge. At any stage you also have the right to ask us to stop using your personal data for direct marketing purposes.
</p>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicyPage