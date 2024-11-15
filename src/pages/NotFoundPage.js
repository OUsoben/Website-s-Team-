import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Notfoundpage.css"

const NotFoundPage = () => {
  let navigate = useNavigate()
  return (
    <>
      <section className='text-center py-5 my-5'>
          <h1 className='Font-style'>This page could be found</h1>
          <img className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-illustration-download-in-svg-png-gif-file-formats--page-not-found-webpage-pack-network-communication-illustrations-6167010.png" alt="" />
          <div>
          <button className='btn btn-primary ' onClick={()=>{
            navigate('/')
          }}>Homepage</button>
        
          </div>
      </section>
    </>
  )
}

export default NotFoundPage