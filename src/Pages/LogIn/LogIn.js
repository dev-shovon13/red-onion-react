import React from 'react';
import { NavLink, useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import google from '../../images/google.png'
import logo from '../../images/logo.png'
import './LogIn.css'

const LogIn = () => {
    // imports 
    const { signInUsingGoogle, signInUsingGithub, signInUsingTwitter, signInUsingFacebook, error, setError, handleEmail, handlePassword, handleSubmit, handleUserSignIn, setUser, setUserName, setIsLoading } = useAuth()

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
                console.log(result);
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
    // sign in using email and password 
    const handleSignIn = () => {
        handleUserSignIn()
            .then(result => {
                console.log('user', result.user);
                console.log('userName', result.user.displayName);
                console.log('userEmail', result.user.email);
                setUser(result.user)
                setUserName(result.user.displayName)
                history.push(redirect_URI)
                setError('')
            }).catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false));
    }
    return (
        <div className="log-in-bg pt-5 pb-5 text-center">
            <div className="container">
                <div className="width mx-auto">
                    <Link to="/home">
                        <img src={logo} alt="" style={{ width: "200px" }} className="py-5" />
                    </Link>                    <form className="" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="email" className="form-input" placeholder="Email" onBlur={handleEmail} />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-input" placeholder="Password" onBlur={handlePassword} />
                        </div>
                        <div className="mb-3 text-start">
                            <NavLink to="/login" className="text-decoration-none text-info border-remove">Forgot Password ?</NavLink>
                        </div>
                        <button onClick={handleSignIn} className="btn sign-btn w-100"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Log In</button>
                        <div className="text-danger fw-bold fs-6">{error}</div>

                        <p className="pt-3 color">New Member ? <NavLink to="/signup" className="text-decoration-none"><span className="text-info fw-bold">Register</span></NavLink></p>
                    </form>
                    <div className="border-top mt-2">
                        <p className="my-0 text-secondary fw-bold">or</p>
                        <p className="mt-0 text-secondary">Log In with any of these Accounts</p>
                        <div className="d-flex gap-2 justify-content-center">
                            <img onClick={handleGoogleLogIn} src={google} alt="" style={{ height: "45px" }} className="me-2 border rounded-circle p-1 shadow fs-icon" />
                            <FontAwesomeIcon onClick={handleGithubLogIn} icon={faGithub} className="me-2 border rounded-circle p-2 shadow fs-icon" />
                            <FontAwesomeIcon onClick={handleTwitterLogIn} icon={faTwitter} className="icon-twitter me-2 border rounded-circle p-2 shadow fs-icon" />
                            <FontAwesomeIcon onClick={handleFacebookLogIn} icon={faFacebook} className="icon-facebook me-2 border rounded-circle p-2 shadow fs-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;