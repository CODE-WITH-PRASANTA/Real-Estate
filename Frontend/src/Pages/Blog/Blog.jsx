import React from 'react'
import './Blog.css'
import BlogSection from '../../Components/BlogsSection/BlogSection'



const Blog = () => {
  return (
   <>
    <div className="contact-container">
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <p className="breadcrumb">Home / Pages / Latest News</p>
        <h1 className="contact-title">Latest News</h1>
      </div>
    </div>
    <BlogSection />
   </>
  )
}

export default Blog