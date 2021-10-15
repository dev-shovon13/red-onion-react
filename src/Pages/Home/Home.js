import React from 'react';
import Banner from '../Banner/Banner';
import Food from '../Food/Food';
import WhyUs from '../WhyUs/WhyUs';
import './Home.css'

const Home = () => {
    return (
        <>
            <Banner />
            <Food />
            <WhyUs />
        </>
    );
};

export default Home;