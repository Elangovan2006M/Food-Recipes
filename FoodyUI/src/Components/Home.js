// src/components/Home.jsx

import React, { useState, useEffect } from "react";
import { getTrendingRecipes, getPopularRecipes } from "../Service/RecipeService";
import '../Styles/Home.css';
import Brand_Img from '../Assests/brand-image.png';
import Cup_Img from '../Assests/cup.png';
import Right_Arrow from '../Assests/right-arrow.png';
import Popular_Img from '../Assests/popular-heart.png';
import TrendingCard from "./TrendingCard";
import RecipeCard from "./RecipeCard";
import { MdTrendingUp } from 'react-icons/md';
import { FaPepperHot, FaFish } from "react-icons/fa6";
import { GiBowlOfRice, GiSushis, GiSteak, GiNoodles, GiTacos, GiFullPizza, GiSadCrab } from "react-icons/gi";
import { LuSandwich } from "react-icons/lu";

const Home = () => {
  const [trendingRecipes, setTrendingRecipes] = useState([]);
  const [popularRecipes, setPopularRecipes]   = useState([]);

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

  return (
    <div className="home-container">
      <div className="home">
        {/* Banner */}
        <div className="home-banner">
          <img src={Brand_Img} alt="brand-image" />
        </div>

        {/* Welcome */}
        <div className="home-welcome">
          <h1>Vanakkam! <span className="brand-name">Plate Stream</span></h1>
          <p>Binge-worthy bites, one recipe video at a time.</p>
        </div>

        {/* Trending Section */}
        <section className="home-trending">
          <div className="full-align">
            <h2>See <span className="home-highlight-style">Trending</span> Recipes</h2>
            <button className="view-all">
              View All <img src={Right_Arrow} alt="→" />
            </button>
          </div>
          <h3 className="button-front">
            Trending recipes <MdTrendingUp size={24} color="#ffffff" />
          </h3>
          <div className="card-grid">
            {trendingRecipes.length > 0
              ? trendingRecipes.map(recipe => (
                  <TrendingCard key={recipe.id} recipe={recipe} />
                ))
              : <p>Loading trending…</p>
            }
          </div>
        </section>

        {/* Cuisines Section */}
        <section className="home-cuisines">
          <h2>Need <span className="home-highlight-style">Varieties</span>?</h2>
          <div className="button-front">
            Explore By Cuisines <img src={Cup_Img} alt="cup-img" />
          </div>
          <div className="cuisine-container">
            <div className="cuisine-box"><FaPepperHot /><p>Indian</p></div>
            <div className="cuisine-box"><GiSushis /><p>Japanese</p></div>
            <div className="cuisine-box"><LuSandwich /><p>American</p></div>
            <div className="cuisine-box"><GiFullPizza /><p>Italian</p></div>
            <div className="cuisine-box"><GiTacos /><p>Mexican</p></div>
          </div>
          <div className="cuisine-container">
            <div className="cuisine-box"><GiBowlOfRice /><p>Korean</p></div>
            <div className="cuisine-box"><GiNoodles /><p>Chinese</p></div>
            <div className="cuisine-box"><GiSteak /><p>Australian</p></div>
            <div className="cuisine-box"><GiSadCrab /><p>Thai</p></div>
            <div className="cuisine-box"><FaFish /><p>Malaysian</p></div>
          </div>
        </section>

        <div className="home-popular">
                    <div className="full-align">
                        <h2><span className="home-highlight-style">Our</span> Most <span className="home-highlight-style">Popular</span> recipes</h2>
                        <button className="view-all">View All<img src={Right_Arrow} alt="right-arrow"/></button>
                    </div>
                        <div className="button-stack">
                            <div className="button-back"></div>
                        <h3 className="button-front">Trending tastes everyone's loving <img src={Popular_Img} alt="popular-heart-img"/></h3>
                        </div>
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
                        {/* <button className="view-all">View All<FaArrowRight size={22} color="#ffffff"/></button> */}

                </div>
      </div>
    </div>
  );
};

export default Home;
