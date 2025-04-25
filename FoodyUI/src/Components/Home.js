import React from "react";
import '../Styles/Home.css';
// import '../Assests/';

import {MdTrendingUp} from 'react-icons/md';


const Home = () =>
{
    return(
        <div className="home-container">
            <div className="home">
                <div className="home-banner">
                    <></>
                </div>

                <div className="home-welcome">
                    <h1>Vanakkam! <span className="brand-name">Plate Stream</span></h1>
                    <p>Binge-worthy bites, one recipe video at a time.</p>
                </div>

                <div className="home-trending">
                    <h2>What to <span className="home-highlight-stlye">Cook</span>?</h2>

                    <h3>See Trending recipes<MdTrendingUp size={24} color="#ffffff" /></h3>
                    <div className="home-trending-cards">
                        <img src="" alt="trending-imgs"/>
                        <button type="submit">View Recipe</button>
                    </div>
                </div>

                <div className="home-cuisines">

                </div>
            </div>
        </div>
    );
}

export default Home