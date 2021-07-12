import React, { Component } from 'react';

import HeaderImage from '../headerImage';
import Login from '../auth/login';

import authHeaderImage from '../../static/assests/images/aussieInGreenField.jpg';

class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <HeaderImage 
                    className="auth-page-img" 
                    img={authHeaderImage}  
                    height="480px"
                    title="Login"
                />

                <Login />
            </div>
        )
    }
}

export default Auth;