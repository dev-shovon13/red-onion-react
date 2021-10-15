import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png'

// this is the footer page
const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 text-start px-3 text pb-5">
                    <div className="col mb-3 mb-md-0">
                        <img src={logo} alt="" className="img-fluid" style={{ width: "150px" }} />
                    </div>
                    <div className="col">
                        <Link to="/home" className="text-decoration-none text d-block link">
                            About Online Food
                        </Link>
                        <Link to="/home" className="text-decoration-none text d-block link">
                            Read Our Blog
                        </Link>
                        <Link to="/signup" className="text-decoration-none text d-block link">
                            Sign Up to Deliver
                        </Link>
                        <Link to="/home" className="text-decoration-none text d-block link">
                            Add Your Restaurant
                        </Link>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <Link to="/home" className="text-decoration-none text d-block link">
                            Get Help
                        </Link>
                        <Link to="/home" className="text-decoration-none text d-block link">
                            Read FAQs
                        </Link>
                        <Link to="/home" className="text-decoration-none text d-block link">
                            View all Cities
                        </Link>
                        <Link to="/home" className="text-decoration-none text d-block link">
                            Restaurants near Me
                        </Link>
                    </div>

                    <div className="col mt-3 mt-md-0">
                        <h5>Get Connected with Us</h5>
                        <div className="d-flex pb-3 pb-md-0 mt-4">
                            <FontAwesomeIcon icon={faTwitter} className="fs-3 icon-1 me-3" />
                            <FontAwesomeIcon icon={faFacebook} className="fs-3 icon-2 me-3" />
                            <FontAwesomeIcon icon={faInstagram} className="fs-3 icon-3 me-3" />
                            <FontAwesomeIcon icon={faLinkedin} className="fs-3 icon-4 me-3" />
                            <FontAwesomeIcon icon={faYoutube} className="fs-3 icon-5" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-2 bg-gradiant">
                <div className="d-md-flex justify-content-between align-items-center container">
                    <p className="p-3 mb-0 text ">© 2021 devShovon13. All rights reserved.</p>
                    <div className="d-flex p-3">
                        <Link to="/home" className="text-decoration-none text d-block link me-4">
                            Privacy Policy
                        </Link>
                        <Link to="/home" className="text-decoration-none text d-block link me-4">
                            Terms of Use
                        </Link>
                        <Link to="/home" className="text-decoration-none text d-block link">
                            Pricing
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;