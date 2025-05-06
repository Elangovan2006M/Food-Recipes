import React from "react";
import "../Styles/RecentBlogCard.css";

const RecentBlogCard = ({ blog }) => {
  return (
    <div className="recent-blog-card">
      <img src={blog.recipeImgUrl} alt={blog.recipeName} className="recent-img" />
      <div className="recent-content">
            <div className="recent-tags">
            <span>Tips</span>
            <span>Recipe</span>
            </div>
        <h3>{blog.recipeName}</h3>
        <p>{blog.overview}</p>
        <a href="#">Read Article ↗</a>
      </div>
    </div>
  );
};

export default RecentBlogCard;
