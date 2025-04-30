import React from "react";
import '../Styles/Footer.css';
import PlateStream from '../Assests/Platestream.png';
import { FaFacebook, FaTwitter, FaInstagram , FaWhatsapp} from "react-icons/fa";

const Footer = () =>
{
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-about">
                    <div className="footer-about-logo">
                        <img src={PlateStream} alt="logo-footer"/>
                        <h1>Plate Stream</h1>
                    </div>
                    <p>Watch. Cook. Share. Your favorite recipes-streamed fresh every day.</p>
                    <div className="socialmedia">
                        <FaFacebook className="footer-socialmedia" size={24} />
                        <FaTwitter className="footer-socialmedia" size={24} />
                        <FaInstagram className="footer-socialmedia" size={24}  />
                        <FaWhatsapp className="footer-socialmedia" size={24}  />
                    </div>
                </div>
                <div className="quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                    <li><a href="\">Home</a></li>
                    <li><a href="\recipe">Recipes</a></li>
                    <li><a href="\blog">Blog</a></li>
                    <li><a href="\aboutus">About Us</a></li>
                    <li><a href="\contact">Contact</a></li>
                    </ul>
                </div>
                <div className="categories">
                    <h3>Popular Categories</h3>
                    <ul>
                    <li><a href="\">Trending Recipes</a></li>
                    <li><a href="\">Indian Recipes</a></li>
                    <li><a href="\">Breakfast Ideas</a></li>
                    <li><a href="\">Easy Recipes</a></li>
                    <li><a href="\">5 minute Meals</a></li>
                    </ul>
                </div>

                <div className="connect">
                    <h3>Stay in the Flavor Loop</h3>
                    <p>Get weekly recipes, video drops, and cooking tips straight to your inbox</p>

                    <div className="footer-contact">
                        <input type="email" placeholder="Enter email to connect"/>
                        <button type="submit">Subscribe</button>
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