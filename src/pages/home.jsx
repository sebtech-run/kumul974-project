import React from 'react';
import Nav from '../components/header/nav';
import Header from '../components/header/header';
import Slider from '../components/slider/slider';

import './style/home/home.css';


const Home = () => {
    return (
        <div>
        <Header />
        <Nav />
        <Slider />
        <div className='last-article'>
            <h3>derniers articles</h3>
        </div>
       

        </div>
    );
};

export default Home;