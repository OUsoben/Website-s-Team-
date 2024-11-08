import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/HomeStyle.css"

const HomePage = () => {
  return (
    <>

      <section className="d-flex flex-column flex-lg-row pt-5 px-5 gap-3 m-3 bg-danger">
        <div style={{ height: "500px" }} className="col-12 col-lg-9 bg-white rounded">
          {/* Content goes here */}
        </div>
        <div style={{ height: "500px" }} className="col-12 col-lg-3 bg-danger d-flex flex-column gap-3">
          <div style={{ height: "247px" }} className="bg-white rounded w-100 mt-0"></div>
          <div style={{ height: "247px" }} className="bg-white rounded w-100"></div>
        </div>
      </section>

      <section className="d-flex flex-column flex-lg-row  px-5 gap-3 mx-3  bg-danger">
        <div className="col-12 col-lg-3">
          <div style={{ height: "247px" }} className="bg-white w-100 rounded mt-0"></div>
        </div>
        <div className="col-12 col-lg-3">
          <div style={{ height: "247px" }} className="bg-white w-100 rounded"></div>
        </div>
        <div className="col-12 col-lg-3">
          <div style={{ height: "247px" }} className="bg-white w-100 rounded mt-0"></div>
        </div>
        <div className="col-12 col-lg-3">
          <div style={{ height: "247px" }} className="bg-white w-100 rounded "></div>
        </div>
      </section>



    </>
  )
}

export default HomePage