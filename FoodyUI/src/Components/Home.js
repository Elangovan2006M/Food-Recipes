import React ,{useState, useEffect}from "react";
import { getAllRecipes } from "../Service/RecipeService";
import '../Styles/Home.css';
import Brand_Img from '../Assests/brand-image.png';
import Cup_Img from '../Assests/cup.png';
import Popular_Img from '../Assests/popular-heart.png';
import Right_Arrow from '../Assests/right-arrow.png';
import RecipeCard from "./RecipeCard";
import {MdTrendingUp} from 'react-icons/md';
import { FaPepperHot,FaFish  } from "react-icons/fa6";
import { GiBowlOfRice,GiSushis,GiSteak,GiNoodles,GiTacos,GiFullPizza,GiSadCrab} from "react-icons/gi";
import { LuSandwich } from "react-icons/lu";

const Home = () =>
{
    useEffect(() => {
        handlePopularRecipes();
    }, []);


    const handlePopularRecipes = async () => {
        try {
            const response = await getAllRecipes();
            const recipes = response.data;
            setPopularRecipes(recipes);
        } catch (error) {
            console.error("Error fetching popular recipes:", error);
        }
    }
    const[popular_recipes, setPopularRecipes] = useState([]);

    return(
        <div className="home-container">
            <div className="home">
                <div className="home-banner">
                    <img src={Brand_Img} alt="brand-image"></img>
                </div>

                <div className="home-welcome">
                    <h1>Vanakkam! <span className="brand-name">Plate Stream</span></h1>
                    <p>Binge-worthy bites, one recipe video at a time.</p>
                </div>

                <div className="home-trending">
                    <div className="full-align">
                        <h2>What to <span className="home-highlight-style">Cook</span>?</h2>
                        <button className="view-all">View All<img src={Right_Arrow} alt="right-arrow"/></button>
                    </div>
                        <div className="button-stack">
                        <div className="button-back"></div>
                        <h3 className="button-front">See Trending recipes <MdTrendingUp size={24} color="#ffffff" /></h3>
                        </div>
                    <div className="home-trending-cards">
                        <div className="trending-card">
                            <div className="card-image">

                            </div>
                            <div className="card-content">
                            <div className="results">
                            {popular_recipes.length > 0 ? (
                            <div className="card-grid">
                            {popular_recipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                            ))}
                            </div>
                            ) : (<p>...</p>)}
                            </div>
                            </div>
                        </div>
                        <button type="submit">View Recipe</button>
                    </div>
                </div>

                <div className="home-cuisines">
                    <h2>Need <span className="home-highlight-style">Varieties</span>?</h2>
                    <div className="button-stack">
                        <div className="button-back"></div>
                        <h3 className="button-front">Explore By Cuisines <img src={Cup_Img} alt="cup-img"/></h3>
                    </div>
                    <div className="cuisine-container">
                        <div className="cuisine-box">
                            <FaPepperHot />
                            <p>Indian</p>
                        </div>
                        <div className="cuisine-box">
                            <GiSushis />
                            <p>Japanese</p>
                        </div>
                        <div className="cuisine-box">
                            <LuSandwich />
                            <p>American</p>
                        </div>
                        <div className="cuisine-box">
                            <GiFullPizza />
                            <p>Italian</p>
                        </div>
                        <div className="cuisine-box">
                            <GiTacos />
                            <p>Mexican</p>
                        </div>
                    </div>
                    <div className="cuisine-container">
                        <div className="cuisine-box">
                            <GiBowlOfRice />
                            <p>Korean</p>
                        </div>
                        <div className="cuisine-box">
                            <GiNoodles />
                            <p>Chinese</p>
                        </div>
                        <div className="cuisine-box">
                            <GiSteak />
                            <p>Australian</p>
                        </div>
                        <div className="cuisine-box">
                            <GiSadCrab />
                            <p>Thai</p>
                        </div>
                        <div className="cuisine-box">
                            <FaFish />
                            <p>Malaysian</p>
                        </div>
                    </div>
                </div>

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
                            {popular_recipes.length > 0 ? (
                            <div className="card-grid">
                            {popular_recipes.map((recipe) => (
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
}

export default Home