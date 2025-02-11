import React from 'react'
import './Blog.css'
import BlogSection from '../../Components/BlogsSection/BlogSection'



const Blog = () => {
  return (
   <>
    <div className="blog-sec-container">
      <div className="blog-sec-overlay"></div>
      <div className="blog-sec-content">
        <p className="breadcrumb">Home / Pages / Latest News</p>
        <h1 className="blog-sec-title">Latest News</h1>
      </div>
    </div>
    <BlogSection />
   </>
  )
}

export default Blog