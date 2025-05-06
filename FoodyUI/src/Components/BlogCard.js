import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../Service/BlogContext';


import '../Styles/BlogCard.css';

const BlogCard = ({ blog }) => {

    const navigate = useNavigate();
    const { setSelectedBlog } = useBlog();

    const handleClick = () => {
        try {
            setSelectedBlog(blog);
            navigate('/blogs/view');
        }
        catch(error) {
            console.log("Failed to load blog: ", error);
        }
    };

    const truncateText = (text, limit) => {
        if(!text)
        {
            return '';
        }
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

  return (
    <div className='blog-card'>
        <img
            src = {blog.recipeImgUrl || 'https://via.placeholder.com/300'}
            alt = {blog.recipeName}
            className='blog-image'
        />

        <div className='blog-details'>
            <div className='blog-header'>
                <h4>{blog.recipeName}</h4>
                <span>{Math.ceil((blog.overview?.split(' ').length || 0) / 200)} min read</span>
            </div>

            <p className='blog-description'>{truncateText(blog.overview, 100)}</p>

            <div className='blog-info'>
                <button className='view-button' onClick={handleClick}>Read More</button>
                <span>Tips</span>
                <span>Recipe</span>
                <span>{blog.createdAt}</span>
            </div>
        </div>
    </div>
  );
};

export default BlogCard;