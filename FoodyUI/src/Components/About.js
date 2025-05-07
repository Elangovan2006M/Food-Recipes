import React from 'react';
import '../Styles/About.css';
import logo from '../Assests/round-logo.png';
import AboutUsBanner from '../Assests/aboutusbanner.png';
import { BiSolidVideos } from "react-icons/bi";
import { FaGlobe, FaUtensils, FaAppleAlt } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-header">
                <h1>About <span>Plate Stream</span></h1>
                <p>Stream. Cook. Taste. Repeat.</p>
            </div>

            <div className="about-us-body">
                <div className="about-us-left">
                    <img src={AboutUsBanner} alt='About Us Banner' className='about-us-banner'/>
                    <div className='about-us-title'>
                        <img src={logo} alt="Plate Stream Logo" className="about-us-logo" />
                        <h2>Welcome to Plate Stream</h2>
                    </div>
                    <p>
                        Your ultimate video recipe destination. We believe that food isn't just fuel – it's an experience, an art, a culture.
                        Plate Stream helps you explore delicious bites from across the world, with every dish presented as a binge-worthy video.
                    </p>
                    <p>
                        Whether you're a beginner or a seasoned home cook, we've got something exciting for you. Dive into global cuisines,
                        learn quick tricks, and elevate your kitchen game – one stream at a time.
                    </p>
                </div>

                <div className="about-us-right">
                    <div className="about-us-feature">
                        <BiSolidVideos className="about-icon" />
                        <p><strong>Video Recipes</strong><br />Cook along in real-time</p>
                    </div>
                    <div className="about-us-feature">
                        <FaUtensils className="about-icon" />
                        <p><strong>Expert Tips</strong><br />From passionate chefs</p>
                    </div>
                    <div className="about-us-feature">
                        <FaAppleAlt className="about-icon" />
                        <p><strong>Healthy Options</strong><br />For every lifestyle</p>
                    </div>
                    <div className="about-us-feature">
                        <FaGlobe className="about-icon" />
                        <p><strong>Global Cuisines</strong><br />From India to Italy</p>
                    </div>
                </div>
            </div>

            <div className="about-us-cta">
                <h3>Join thousands of foodies already streaming & cooking!</h3>
                <button onClick={() => window.location.href = "/blogs"}>Explore Our Blog &gt;&gt;&gt;</button>
            </div>
        </div>
    );
};

export default AboutUs;
