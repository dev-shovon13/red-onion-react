import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../../images/google.png'
import logo from '../../images/logo.png'

import './SignUp.css'

const SignUp = () => {
    // imports 
    const { signInUsingGoogle, signInUsingGithub, signInUsingTwitter, signInUsingFacebook, error, setError, handleName, handleEmail, handlePassword, handleUserSignUp, handleSubmit, setUser, setUserName, setIsLoading } = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect_URI = location.state?.from || '/home'

    // sign in using google
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign in using github
    const handleGithubLogIn = () => {
        signInUsingGithub()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign in using twitter
    const handleTwitterLogIn = () => {
        signInUsingTwitter()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign in using facebook
    const handleFacebookLogIn = () => {
        signInUsingFacebook()
            .then(result => {
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    // sign up using email and password 
    const handleSignUp = () => {
        handleUserSignUp()
            .then(result => {
                console.log('user:', result.user);
                console.log('userName:', result.user.displayName);
                console.log('userEmail:', result.user.email);
                setUser(result.user)
                setUserName(result.user.displayName)
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                console.log(error);
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    return (
        <div className="sign-up-bg text-center">
            <Helmet>
                <title>Sign Up</title>
                <meta name="This is the sign up page of Red Onion" content="Red Onion Website" />
            </Helmet>
            <div className="container pt-3">
                <div className="width mx-auto">
                    <form onSubmit={handleSubmit}>
                        <Link to="/home">
                            <img src={logo} alt="" style={{ width: "200px" }} className="py-5" />
                        </Link>
                        <div className="mb-3 d-flex ">
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Name"
                                onBlur={handleName}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-input"
                                placeholder="Email"
                                onBlur={handleEmail}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Password"
                                onBlur={handlePassword}
                                required
                            />
                        </div>
                        {/* <div className="mb-3">
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Confirm Password"
                                required
                            />
                        </div> */}
                        <button
                            onClick={handleSignUp}
                            className="btn sign-btn w-100"
                        >
                            Sign Up
                        </button>
                        <div className="text-danger fw-bold fs-6">{error}</div>
                        <p className="color pt-2">Already have an Account ?
                            <NavLink
                                to="/login"
                                className="text-decoration-none"
                            >
                                <span className="text-info fw-bold ms-2">Log In</span>
                            </NavLink>
                        </p>
                    </form>
                    <div className="border-top mt-2">
                        <p className="my-0 text-secondary fw-bold">or</p>
                        <p className="mt-0 text-secondary">Log In with any of these Accounts</p>
                        <div className="d-flex gap-2 justify-content-center">
                            <img
                                onClick={handleGoogleLogIn}
                                src={google}
                                alt=""
                                style={{ height: "45px" }}
                                className="me-2 border rounded-circle p-1 shadow fs-icon"
                            />
                            <FontAwesomeIcon
                                onClick={handleGithubLogIn}
                                icon={faGithub}
                                className="me-2 border rounded-circle p-2 shadow fs-icon"
                            />
                            <FontAwesomeIcon
                                onClick={handleTwitterLogIn}
                                icon={faTwitter}
                                className="icon-twitter me-2 border rounded-circle p-2 shadow fs-icon"
                            />
                            <FontAwesomeIcon
                                onClick={handleFacebookLogIn}
                                icon={faFacebook}
                                className="icon-facebook me-2 border rounded-circle p-2 shadow fs-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;