import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../Service/BlogService";
import RecentBlogCard from "./RecentBlogCard";
import BlogCard from "./BlogCard";
import { useBlog } from "../Service/BlogContext";
import { GrArticle } from "react-icons/gr";
import '../Styles/Blog.css';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";


const Blog = () => {
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const { selectedBlog } = useBlog();


    // Pagination states
      const [currentPage, setCurrentPage] = useState(0);
      const [totalPages, setTotalPages] = useState(1);
      const pageSize = 3;

    useEffect(() => {
        fetchAllBlogs(0);
    }, [selectedBlog]);

    const fetchAllBlogs = async (page) => {
        try {
            const res = await getAllBlogs(page, pageSize);
                  setFilteredBlogs(res.data.content);
                  setTotalPages(res.data.totalPages);
                  setCurrentPage(page);
        } catch (error) {
            console.log("Error displaying all recipes: ", error);
        }
    };

    
    const handlePageChange = (newPage) => {
        fetchAllBlogs(newPage);
    };

    return (
        <div className="blog-container">
            {/*  Section 1: Recent Blog */}
            <div className="blog-recent">
                <h1>Recent <span className="blog-highlight-style ">Posts</span></h1>
                <div className="blog-stack">
                    <div className="blog-back"></div>
                    <button className="blog-front">Read Recent Articles <GrArticle /></button>
                </div>
                
                <div className="blog-recent-card">
                    {filteredBlogs.length > 0 && (
                        <RecentBlogCard blog={filteredBlogs[0]} />
                    )}
                </div>
            </div>

            {/*  Section 2: All Blogs */}
            <div className="our-blog">
                <div className="blog-title">
                    <h1>Our <span className="blog-highlight-style ">Blogs</span></h1>
                    <div className="blog-stack">
                        <div className="blog-back"></div>
                        <button className="blog-front">Insights you can use ↗</button>
                    </div>
                </div>

                <div className="all-blogs">
                    {filteredBlogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </div>
            </div>
            {/* Pagination Controls */}
            <div className="pagination-controls">
                <button className='prev-button'
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 0}
                >
                <MdOutlineKeyboardArrowLeft />
                </button>
                <span className='page-numbers'>{`${currentPage + 1} of ${totalPages}`}</span>
                <button  className='next-button'
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages - 1}
                >
                <MdOutlineKeyboardArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Blog;
