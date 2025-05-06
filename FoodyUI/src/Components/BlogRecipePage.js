import React from "react";
import { useBlog } from "../Service/BlogContext";

import "../Styles/BlogPage.css";

const RecipeBlogPage= () => {
    const { selectedBlog } = useBlog();

    if(!selectedBlog){
        return <h2>Blog not found!</h2>;
      }
    return (
        <div className="recipe-container">
            <h1>{selectedBlog.recipeName}</h1>
            <img className="main-img" src={selectedBlog.recipeImgUrl} alt={selectedBlog.recipeName} />

            <section className="overview">
                <h2>Overview</h2>
                <p>{selectedBlog.overview}</p>
            </section>

            <section className="history">
                <h2>History</h2>
                <p>{selectedBlog.history}</p>
                <div className="history-images">
                    <img src={selectedBlog.historyImg1} alt="history 1" />
                    <img src={selectedBlog.historyImg2} alt="history 2" />
                </div>
            </section>

            <section className="variations">
                <h2>Variations</h2>
                {selectedBlog.variations.split("\n").map((v, i) => (
                    <p key={i}>🔸 {v}</p>
                ))}
            </section>

            <section className="pro-tips">
                <h2>Pro Tips</h2>
                {selectedBlog.proTips.split("\n").map((tip, i) => (
                    <p key={i}>✅ {tip}</p>
                ))}
            </section>

            <section className="also-known">
                <h2>Also Known As</h2>
                <p>{selectedBlog.alsoKnownAs}</p>
            </section>

            <section className="best-served">
                <h2>Best Served With</h2>
                <p>{selectedBlog.bestServedWith}</p>
            </section>
        </div>
    );
};

export default RecipeBlogPage;
