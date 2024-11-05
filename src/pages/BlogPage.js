import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/BlogStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const BlogPage = () => {
  return (
  
    <>
        <section className='p-3 ps-5'>
           <p>Home <FontAwesomeIcon className='ps-2 pe-2' icon={faAngleRight} /> Blogs</p>
        </section>
    </>
  )
}

export default BlogPage