import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner text-center d-flex flex-column justify-content-center align-items-center">
            <h1 className="font f-color fw-bold banner-txt mb-3">BEST FOOD WAITING FOR YOUR BELLY</h1>
            <div className="align-items-center">
                <input type="text" className="form-control banner-input d-inline" placeholder="Search Your Food" />
                <button className="btn banner-btn banner-search px-4">Search</button>
            </div>
        </div>
    );
};

export default Banner;