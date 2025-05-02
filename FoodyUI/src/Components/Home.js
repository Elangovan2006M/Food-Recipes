import React, { useState, useEffect } from "react";
import { getTrendingRecipes, getPopularRecipes } from "../Service/RecipeService";
import '../Styles/Home.css';
import Brand_Img from '../Assests/banner.png';
import TrendingRecipeCard from "./TrendingRecipeCard";
import RecipeCard from "./RecipeCard";
import { MdTrendingUp } from 'react-icons/md';
import { FaPepperHot, FaShieldHeart, FaFish } from "react-icons/fa6";
import { GiBowlOfRice, GiSushis, GiSteak, GiNoodles, GiTacos, GiFullPizza, GiSadCrab } from "react-icons/gi";
import { LuSandwich, LuMessagesSquare } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaMapMarkedAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useRecipe } from "../Service/RecipeContext";
import Blog from '../Assests/Blog.png';
import logo from '../Assests/round-logo.png';
import { BiSolidVideos } from "react-icons/bi";
import { FaGlobe, FaUtensils, FaAppleAlt } from "react-icons/fa";

const Home = () => {
  const [trendingRecipes, setTrendingRecipes] = useState([]);
  const [popularRecipes, setPopularRecipes]   = useState([]);

    const handleBlog = () => {
        navigate('/blog');
    }


  useEffect(() => {
    (async () => {
      try {
        const [tResp, pResp] = await Promise.all([
          getTrendingRecipes(),
          getPopularRecipes()
        ]);
        setTrendingRecipes(tResp.data);
        setPopularRecipes(pResp.data);
      } catch (e) {
        console.error("Error loading recipes", e);
      }
    })();
  }, []);
    const navigate = useNavigate();
    const { setSelectedCuisine } = useRecipe();

    const handleCuisineSelect = (cuisine) => {
        switch (cuisine) {
            case 'Indian':
            case 'Japanese':
            case 'American':
            case 'Italian':
            case 'Mexican':
            case 'Korean':
            case 'Chinese':
            case 'Australian':
            case 'Thai':
            case 'Malaysian':
                setSelectedCuisine(cuisine);
                navigate('/recipe');
                break;
            default:
                break;
        }
    };

    return(
        <div className="home-container">
            <div className="home">
                <div className="home-banner">
                    <img src={Brand_Img} alt="brand-image" className="brand-image"></img>
                </div>

                {/* Trending Section */}

                <section className="home-trending">
                <div className="full-align">
                    <h2>See <span className="home-highlight-style">Trending</span> Recipes</h2>
                </div>
                    <div className="button-stack">
                        <div className="button-back"></div>
                        <h3 className="button-front">Trending recipes <MdTrendingUp size={24} color="#ffffff" /></h3>
                    </div>
                    <button className="view-all" >View All &gt;</button>
                    <div className="home-trending-cards">
                        <div className="results">
                        {trendingRecipes.length > 0 ? (
                            <div className="card-grid">
                            {trendingRecipes.map(recipe => (
                            <TrendingRecipeCard key={recipe.id} recipe={recipe} />
                            ))}
                            </div>
                        ) : (<p>Loading trending...</p>)}
                        </div>
                    </div>
                </section>

                {/* Cuisines Section*/}

                <div className="home-cuisines">
                    <h2>Need <span className="home-highlight-style">Varieties</span>?</h2>
                    <div className="button-stack">
                        <div className="button-back"></div>
                        <h3 className="button-front">Explore By Cuisines <FaMapMarkedAlt className="topic-icons" /></h3>
                    </div>
                    <div className="cuisine-container">
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Indian')}>
                            <FaPepperHot className="cuisine-icons"/>
                            <p>Indian</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Japanese')}>
                            <GiSushis className="cuisine-icons"/>
                            <p>Japanese</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('American')}>
                            <LuSandwich className="cuisine-icons"/>
                            <p>American</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Italian')}>
                            <GiFullPizza className="cuisine-icons"/>
                            <p>Italian</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Mexican')}>
                            <GiTacos className="cuisine-icons"/>
                            <p>Mexican</p>
                        </div>
                    </div>
                    <div className="cuisine-container">
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Korean')}>
                            <GiBowlOfRice className="cuisine-icons" />
                            <p>Korean</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Chinese')}>
                            <GiNoodles className="cuisine-icons"/>
                            <p>Chinese</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Australian')}>
                            <GiSteak className="cuisine-icons"/>
                            <p>Australian</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Thai')}>
                            <GiSadCrab className="cuisine-icons"/>
                            <p>Thai</p>
                        </div>
                        <div className="cuisine-box" onClick={() => handleCuisineSelect('Malaysian')}>
                            <FaFish className="cuisine-icons"/>
                            <p>Malaysian</p>
                        </div>
                    </div>
                </div>

                {/* Popular Recipe Section */}

                <div className="home-popular">
                    <div className="full-align">
                        <h2><span className="home-highlight-style">Our</span> Most <span className="home-highlight-style">Popular</span> recipes</h2>
                    </div>
                        <div className="button-stack">
                            <div className="button-back"></div>
                        <h3 className="button-front">Popular Picks<FaShieldHeart className="topic-icons" /></h3>
                        </div>
                        <button className="view-all" >View All &gt;</button>
                        <div className="home-popular-cards">
                            <div className="results">
                            {popularRecipes.length > 0 ? (
                            <div className="card-grid">
                            {popularRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                            ))}
                            </div>
                            ) : (<p>...</p>)}
                            </div>
                        </div>
                </div>

                {/* Blog Section */}

                <div className="blog">
                    <h2><span className="home-highlight-style">From Our</span> Blog</h2>
                    <div className="button-stack">
                        <div className="button-back"></div>
                        <h3 className="button-front">Best Articles For You  <IoNewspaperOutline  className="topic-icons"/></h3>
                    </div>
                    <div className="blog-container">
                        <div className="kitchen-banner">
                            <div className="kitchen-text">
                                <h2>
                                <span className="highlight">Spice up your</span> 
                                <span className="bold"> kitchen stories!</span>
                                </h2>
                                <p>
                                Discover new flavors, explore exciting recipes, and turn everyday meals into unforgettable culinary moments. Whether you're a home cook or a food lover, let your kitchen adventures begin here!</p>
                                <button className="read-more" onClick={handleBlog}>Read More Articles &gt;&gt;&gt;</button>
                            </div>
                            <div className="kitchen-image">
                                <img src={Blog} alt="Kitchen Collage" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}

                <div className="about">
                    <h2><span className="home-highlight-style">About</span> Us</h2>
                    <div className="button-stack">
                        <div className="button-back"></div>
                        <h3 className="button-front">Best Articles For You  <LuMessagesSquare  className="topic-icons"/></h3>
                    </div>
                    <div className="about-container">
                        <div className="feature-banner">
                            <div className="feature-left">
                                <h3>
                                <img src={logo}/> is your all-in-one cooking companion — a platform designed to help you to <b>watch</b>, <b>learn</b>, and <b>cook</b> delicious meals easily.
                                </h3>
                                <div className="cta-box">
                                <p>
                                    <strong>
                                    Join us, explore trending bites, try new flavors, and turn every plate into a masterpiece.
                                    </strong>
                                </p>
                                <strong className="cta-highlight">Stream. <span>Cook</span>. Taste. <span>Repeat</span>.</strong>
                                </div>
                                <button className="about-us-button" onClick={handleBlog}>about us &gt;&gt;&gt;</button>
                            </div>

                            <div className="Gap">
                                <div className="feature-right">
                                    <div className="icon-box">
                                    <strong>
                                    <BiSolidVideos className="icon" />
                                    <p>Watch Video<br/> Recipes</p>
                                    </strong>
                                    </div>
                                    <div className="icon-box">
                                    <strong>
                                    <FaGlobe className="icon" />
                                    <p>Explore Global <br/>Cuisines</p>
                                    </strong>
                                    </div>
                                    <div className="icon-box">
                                    <strong>
                                    <FaUtensils className="icon" />
                                    <p>Cook Experted<br/> Recipes</p>
                                    </strong>
                                    </div>
                                    <div className="icon-box">
                                    <strong>
                                    <FaAppleAlt className="icon" />
                                    <p>Enjoy Healthy<br/> Meals</p>
                                    </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    </div>
  );
};

export default Home;
