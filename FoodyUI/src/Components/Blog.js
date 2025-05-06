import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../Service/BlogService";
import BlogCard from "./BlogCard";
import { useBlog } from "../Service/BlogContext";

import '../Styles/Blog.css';

const Blog = () => {
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const { selectedBlog } = useBlog();

    useEffect(() => {
        fetchAllBlogs();
    }, [selectedBlog]);

    const fetchAllBlogs = async () => {
        try {
            const response = await getAllBlogs();
            setFilteredBlogs(response.data);
        } catch (error) {
            console.log("Error displaying all recipes: ", error);
        }
    };

    return (
        <div className="blog-container">
            {/*  Section 1: Recent Blog */}
            <div className="blog-recent">
                <h2>Recent <span>Posts</span></h2>
                <div className="recent-subcard">
                    <button className="recent-filter">Read Recent Articles 🗂</button>
                </div>
                <div className="blog-recent-card">
                    {filteredBlogs.length > 0 && (
                        <BlogCard blog={filteredBlogs[0]} />
                    )}
                </div>
            </div>

            {/*  Section 2: All Blogs */}
            <div className="our-blog">
                <div className="blog-title">
                    <h2>Our <span>Blog</span></h2>
                    <div className="blog-subcard">
                        <button className="blog-subbtn">Insights you can use ↗</button>
                    </div>
                </div>

                <div className="all-blogs">
                    {filteredBlogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
