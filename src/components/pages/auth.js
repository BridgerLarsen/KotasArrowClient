import React, { Component } from 'react';

import HeaderImage from '../headerImage';
import Login from '../auth/login';

class Auth extends Component {
    render() {
        return (
            <div className="auth-page-wrapper">
                <HeaderImage 
                    className="auth-page-img" 
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="Login"
                />

                <Login />
            </div>
        )
    }
}

export default Auth;