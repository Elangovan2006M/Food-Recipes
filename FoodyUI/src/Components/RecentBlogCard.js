import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../Service/BlogContext";
import "../Styles/RecentBlogCard.css";

const RecentBlogCard = ({ blog }) => {
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
  return (
    <div className="recent-blog-card">
      <div><img src={blog.recipeImgUrl} alt={blog.recipeName} className="recent-img" /></div>
      <div className="recent-content">
            <div className="recent-tags">
            <span>Tips</span>
            <span>Recipe</span>
            </div>
        <h3>{blog.recipeName}</h3>
        <p>{blog.overview}</p>
        <h4 onClick={handleClick}>Read Article ↗</h4>
      </div>
    </div>
  );
};

export default RecentBlogCard;
