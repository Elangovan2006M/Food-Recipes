import React, { useState, useEffect } from "react";
import { getAllBlogs } from "../Service/BlogService";
import RecentBlogCard from "./RecentBlogCard";
import BlogCard from "./BlogCard";
import { useBlog } from "../Service/BlogContext";
import { GrArticle } from "react-icons/gr";
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
        </div>
    );
};

export default Blog;
