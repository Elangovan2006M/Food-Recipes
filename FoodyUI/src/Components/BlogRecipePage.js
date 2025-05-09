import React from "react";
import { useBlog } from "../Service/BlogContext";
import { useNavigate } from 'react-router-dom';
import { useRecipe } from '../Service/RecipeContext';
import { getRecipeFromBlog} from '../Service/BlogService';
import { incrementRecipeViews } from "../Service/RecipeService";
import { FiChevronRight, FiCheckCircle } from "react-icons/fi";

import "../Styles/BlogPage.css";

const RecipeBlogPage = () => {

    const navigate = useNavigate();
    const { selectedBlog } = useBlog();
    const { setSelectedRecipe } = useRecipe();

    if (!selectedBlog) {
        return <h2>Blog not found!</h2>;
    }

    const handleViewRecipe = async () => {
        try {
            if (!selectedBlog || !selectedBlog.blogId) {
                console.error("No valid blog ID found.");
                return;
            }
            const recipe = await getRecipeFromBlog(selectedBlog.blogId); // Fetch recipe by ID
            await incrementRecipeViews(recipe.id);
            setSelectedRecipe(recipe); // Set recipe in context
            navigate('/recipes'); // Navigate to the recipe page
        } catch (error) {
            console.error("Error fetching recipe", error);
            navigate('/recipes'); // Optional: Handle navigation if error occurs
        }
    };

    return (
        <div className="recipe-container">
            <div className="recipes-content">
            <h1>{selectedBlog.recipeName}</h1>
            <img className="main-img" src={selectedBlog.recipeImgUrl} alt={selectedBlog.recipeName} />
            <button className="view-recipe-button" onClick={handleViewRecipe}>View Recipe</button>
            </div>
            <div className="overview-container-blog">
            <section className="overview">
                <h2 className="blog-page-titles">Over<span className="blog-highlight-style"> View</span></h2>
                <div><p>{selectedBlog.overview}</p></div>
            </section>

            <section className="history">
                <h2 className="blog-page-titles"><span className="blog-highlight-style"> History</span> Speaks</h2>
                <p>{selectedBlog.history}</p>
                <div className="history-images">
                    <img src={selectedBlog.historyImg1} alt="history 1" />
                    <img src={selectedBlog.historyImg2} alt="history 2" />
                </div>
            </section>

            <section className="variations">
                <h2 className="blog-page-titles">How recipe <span className="blog-highlight-style"> Varies</span> across <span className="blog-highlight-style"> Region</span></h2>
                <div>{selectedBlog.variations.split("\n").map((v, i) => (
                    <p key={i}>
                        <FiChevronRight className="contrast-icon" /> {v}
                    </p>
                ))}</div>
            </section>

            <section className="pro-tips">
                <h2 className="blog-page-titles">Pro <span className="blog-highlight-style"> Tips</span></h2>
                <div>{selectedBlog.proTips.split(".").map((tip, i) => (
                    <p key={i}>
                        <FiCheckCircle className="contrast-icon" /> {tip}
                    </p>
                ))}</div>
            </section>

            <section className="also-known">
                <h2 className="blog-page-titles">Also <span className="blog-highlight-style"> Known</span> As</h2>
                <div><p>{selectedBlog.alsoKnownAs}</p></div>
            </section>

            <section className="best-served">
                <h2 className="blog-page-titles"> <span className="blog-highlight-style">Best </span>Served <span className="blog-highlight-style"> With</span></h2>
                <div><p>{selectedBlog.bestServedWith}</p></div>
            </section>
            </div>
        </div>
    );
};

export default RecipeBlogPage;
