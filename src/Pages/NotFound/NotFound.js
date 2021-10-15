import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        // if page not found then show this page 
        <div className="text-center">
            <div className="top-margin"></div>
            <div className="d-flex flex-column">
                <img src={img} alt="" className="not-found img-fluid" />
                <NavLink to="/home" className="text-decoration-none w-50 mx-auto">
                    <button className="btn signup-btn px-4 py-2">Back To Home</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;