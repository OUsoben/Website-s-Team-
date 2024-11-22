import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/BlogStyle.css"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import BlogCard from '../components/BlogCard'

const BlogPage = () => {
  let navigate = useNavigate()



  const blogPosts = [
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/09/blog-hero-Kellox@2x.jpeg",
      title: "Kellox and Maksimer: Speeding up 800,000 SKUs with WooCommerce",
      author: "Vanessa Petersen",
      date: "Sep 30, 2024",
      tags: ["Enterprise Ecommerce", "Customer Stories"]
    },
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/08/blog-hero-Godaddy@2x.jpg",
      title: "Migrating from GoDaddy Website Builder to WooCommerce",
      author: "Niall Madhoo",
      date: "Sep 26, 2024",
      tags: ["Enterprise Ecommerce", "Sell Online"]
    },
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/09/blog-hero-DOMMA@2x.jpg",
      title: "Spain-based DOMMA sees 350% YoY growth with WooCommerce and Google",
      author: "Vanessa Petersen",
      date: "Sep 30, 2024",
      tags: ["Customer Stories"]
    },
    {
      image: "https://media.sproutsocial.com/uploads/2023/09/164288_16-essential-strategies-to-get-more-views-on-tiktok_Final.png",
      title: "How to get more views on TikTok: 16 essential strategies",
      author: "Erika Ellicott",
      date: "Sep 18, 2024",
      tags: ["Design","Social Media Strategy"]
    },
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/08/blog-hero-USP@2x.jpg",
      title: "Unique value proposition — Why it matters and how to write one",
      author: "Kathryn Marr",
      date: "Aug 29, 2024",
      tags: ["Business Ideas"]
    },
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/09/BFCM_2024_Blog_header.png",
      title: "WooCommerce stores are revving up for Black Friday: The 2024 holiday trends survey",
      author: "Tamara Niesen",
      date: "Sep 4, 2024",
      tags: ["Marketing", "News", "Sell Online"]
    },
  ];
  const blogFirstPosts = [
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/09/blog-hero-Business-Models@2x.jpg",
      title: "Ecommerce business models: Which is best for you?",
      author: "Kathryn Marr",
      date: "Oct 8, 2024",
      tags: ["Business Ideas", "Sell Online"]
    },
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/09/BFCM_2024_Extensions_Blog_header_20c9ff.png",
      title: "2024 Black Friday trends: Top strategies from Woo stores and partnerse",
      author: "Kathryn Marr",
      date: "Sep 26, 2024",
      tags: ["Enterprise Ecommerce", "Enterprise Ecommerce","Sell Online"]
    },

  ]
  const CustomerStories = [
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/09/blog-hero-Kellox@2x.jpeg",
      title: "Kellox and Maksimer: Speeding up 800,000 SKUs with WooCommerce",
      author: "Vanessa Petersen",
      date: "Sep 30, 2024",
      tags: ["Enterprise Ecommerce", "Customer Stories"]
    },
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/09/blog-hero-DOMMA@2x.jpg",
      title: "Spain-based DOMMA sees 350% YoY growth with WooCommerce and Google",
      author: "Vanessa Petersen",
      date: "Sep 30, 2024",
      tags: ["Customer Stories"]
    },
    {
      image: "https://woocommerce.com/wp-content/uploads/2024/06/blog-hero-House-of-malt@2x.jpg",
      title: "Spain-based DOMMA sees 350% YoY growth with WooCommerce and Google",
      author: "Vanessa Petersen",
      date: "Aug 29, 2024",
      tags: ["Customer Stories"]
    },

  ]

  return (
    <>
      <section style={{ fontSize: "15px", marginLeft: "12px" }} className=' d-flex px-md-5 pt-5 pt-2 '>

        <p style={{ cursor: "pointer" }} className='text-muted ps-xl-5 font-style hover-home'
          onClick={() => {
            // Navigate to Home page
            navigate("/")
          }}
        >Home</p> <p><FontAwesomeIcon style={{ width: "30px" }} className=' font-style text-muted' icon={faAngleRight} /> Blogs</p>
      </section>
      <section className='pb-xxl-2'>
        <div className=' ps-xxl-5 ms-xxl-5  ps-4 gap-xxl-3 gap-2 py-4  d-flex'>
          <button type="button" class="btn btn-light ">Design</button>
          <button type="button" class="btn btn-light">Marketing</button>
          <button type="button" class="btn btn-light d-none d-md-inline">Sell Online</button>
          <button type="button" class="btn btn-light d-none d-md-inline">Payments</button>
        </div>
      </section>



      <section>
        <div className="row d-flex mx-xxl-5 px-xxl-5 px-3 me-1 flex-column justify-content-between flex-md-row">
          {blogFirstPosts.map((post, index) => (
            <div key={index} className="col-xl-6 mb-4 ">
              <div className="blog-image mb-3">
                <img className="img-fluid" src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h5>{post.title}</h5>
                <p>By {post.author} • {post.date}</p>
                <div className="blog-card-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-card-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='mt-5'>
      <div className=" mt-5">
        <div className="row mx-xxl-5 me-1">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-md-6  col-lg-4 py-4">
              <BlogCard
                image={post.image}
                title={post.title}
                author={post.author}
                date={post.date}
                tags={post.tags}
              />
            </div>
          ))}
        </div>
      </div>
      </section>

      <section className='text-center py-5 my-5'>
        <button className='btn btn-outline-dark'>Load more</button>
      </section>
       <hr className='pt-5' />
       
       <section className=''> 
       
      <div className=" mb-5 pb-5">
        <div className="row mx-xxl-5 me-1">
          <div className='d-flex justify-content-between px-xxl-5 mx-xxl-3 px-4'>
        <h2 className=''>Customer Stories</h2>
        <a  className='pe-xxl-5 fs-5 text-dark'>See all</a>
        </div>
        
          {CustomerStories.map((post, index) => (
            <div key={index} className="col-md-6  col-lg-4 ">
              <BlogCard
                image={post.image}
                title={post.title}
                author={post.author}
                date={post.date}
                tags={post.tags}
              />
            </div>
          ))}
        </div>
      </div>
      </section>
    </>
  )
}

export default BlogPage
