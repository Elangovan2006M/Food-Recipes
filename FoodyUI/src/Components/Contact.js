import React from 'react';
import '../Styles/Contact.css';
import { IoIosMail } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLogo } from '../Service/LogoContext';

const Contact = () => {
    const{ roundLogo } = useLogo();
    return (
        <div className="contact-us-container">
            <div className="contact-us-header">
                <h1>Contact<span> Us</span></h1>
                <p>Get in Touch...</p>
            </div>

            <div className="contact-us-body">
                <div className="contact-us">
                    <div className='contact-us-title'>
                        <img src={roundLogo.imageUrl} alt={roundLogo.imageName} className="contact-us-logo" />
                        <h2>Welcome to Plate Stream</h2>
                    </div>
                    <p>
                    We’d love to hear from you! Whether you have a question about a recipe, feedback to share, or simply want to say hello — our kitchen door is always open. Drop us a message and we’ll get back to you as quickly as a perfectly baked cookie. Your thoughts, suggestions, and stories warm our hearts just like a homemade meal.
                    </p>
                </div>
                <div className='Links'>
                <div className='Links-title'>
                    <h2>Connect with Us</h2>
                </div>
                <div className='Links-body'>
                    <a href="platestream@gmail.com" className="email-link" target='new' style={{backgroundColor:" #d44638"}}><IoIosMail />/platestream@gmail.com</a>
                    <a href="https://www.instagram.com/platestream/" className="instagram-link" target='new' style={{background: "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf)"}}><FaInstagram/>/PlateStream</a>
                    <a href="https://www.facebook.com/platestream" className="facebook-link" target='new' style={{backgroundColor:" #3b5998"}}><FaFacebook/>/PlateStream</a>
                    <a href="https://www.twitter.com/platestream" className="linkedin-link" target='new' style={{backgroundColor:" #0077b5"}}><FaTwitter/>/PlateStream</a>
                </div>
            </div>
            </div>

            
        </div>
    );
};

export default Contact;
