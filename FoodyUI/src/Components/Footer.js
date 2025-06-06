import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useRecipe } from "../Service/RecipeContext";
import { useLogo } from '../Service/LogoContext';
import '../Styles/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useSocialMedia } from '../Service/SocialMediaContext';
import { subscribeWithEmail } from '../Service/SubscribeService';

const Footer = () =>
{
    const { logo} = useLogo();
    const { facebook, instagram, twitter, mail } = useSocialMedia();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
    const {setSelectedCuisine} = useRecipe();
    const {setSelectedFoodType} = useRecipe();
    const {setSelectedDifficulty} = useRecipe();
    const {setSelectedTime} = useRecipe();

    const handleCuisineLink = (cuisine) => {
        setSelectedCuisine(cuisine);
        setSelectedDifficulty('');
        setSelectedFoodType('');
        setSelectedTime('');
        navigate('/recipe');
    }

    const handleFoodTypeLink = (foodType) => {
        setSelectedFoodType(foodType);
        setSelectedCuisine('');
        setSelectedDifficulty('');
        setSelectedTime('');
        navigate('/recipe');
    }

    const handleDifficultyLink = (difficulty) => {
        setSelectedDifficulty(difficulty);
        setSelectedCuisine('');
        setSelectedFoodType('');
        setSelectedTime('');
        navigate('/recipe');
    }

    const handleTimeLink = (time) => {
        setSelectedTime(time);
        setSelectedCuisine('');
        setSelectedFoodType('');
        setSelectedDifficulty('');
        navigate('/recipe');
    }

    // Subscribe function
    const handleSubscribe = async () => {
        if (!email) {
            setMessage('Please enter a valid email.');
            return;
        }
        try {
            const response = await subscribeWithEmail(email);
            if (response.data) {
            setMessage('Successfully subscribed!');
            setEmail('');
            } else {
            setMessage('Email is already subscribed.');
            }
        } catch (error) {
            setMessage('An error occurred while subscribing.');
            console.error(error);
        }
    };


    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-about">
                    <div className="footer-about-logo">
                        <img src={logo.imageUrl} alt={logo.imageName}/>
                        <h1>Plate Stream</h1>
                    </div>
                    <p>Watch. Cook. Share. Your favorite recipes-streamed fresh every day.</p>
                    <div className="socialmedia">
                        <a href={facebook.url} target="new" ><FaFacebook className="footer-socialmedia" size={24} color="white"/></a>
                        <a href={twitter.url} target="new"><FaTwitter className="footer-socialmedia" size={24} color="white" /></a>
                        <a href={instagram.url} target="new"><FaInstagram className="footer-socialmedia" size={24} color="white"/></a>
                        <a href={mail.url} target="new"><IoIosMail className="footer-socialmedia" size={28} color="white"/></a>
                    </div>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                    <li><a href="\">Home</a></li>
                    <li><a href="\recipe">Recipes</a></li>
                    <li><a href="\blogs">Blog</a></li>
                    <li><a href="\aboutus">About Us</a></li>
                    <li><a href="\contact">Contact</a></li>
                    </ul>
                </div>
                <div className="categories">
                    <h3>Popular Categories</h3>
                    <ul>
                    <li className="quick-link"><a href="\">Trending Recipes</a></li>
                    <li className="quick-link" onClick={() => handleCuisineLink('Indian')} style={{ cursor:"pointer"}}>Indian Recipes</li>
                    <li className="quick-link" onClick={() => handleFoodTypeLink('Breakfast')}style={{ cursor:"pointer"}}>Breakfast Ideas</li>
                    <li className="quick-link" onClick={() => handleDifficultyLink('Easy')}style={{ cursor:"pointer"}}>Easy Recipes</li>
                    <li className="quick-link" onClick={() => handleTimeLink(15)}style={{ cursor:"pointer"}}>15 minute Meals</li>

                    </ul>
                </div>

                <div className="connect">
                    <h3>Stay in the Flavor Loop</h3>
                    <p>Get weekly recipes, video drops, and cooking tips straight to your inbox</p>

                    <div className="footer-contact">
                        <input
                            type="email"
                            placeholder="Enter email to connect"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="button" onClick={handleSubscribe}>Subscribe</button>
                        {message && <p className="subscribe-message">{message}</p>}
                    </div>
                </div>

            </div>
            <div className="footer-ending">
                <hr/>
                <p>&copy; 2025 Platestream. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer