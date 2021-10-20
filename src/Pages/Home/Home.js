import React from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>Red Onion</title>
                <meta name="This is a Restaurant Website" content="Red Onion Website" />
            </Helmet>
        </>
    );
};

export default Home;