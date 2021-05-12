import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className='nav-wrapper'>
                <div className="nav-links">
                    <div className="navlink-wrapper">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </div>

                    <div className="navlink-wrapper">
                        <NavLink to="/about-us">
                            About
                        </NavLink>
                    </div>

                    <div className="navlink-wrapper">
                        <NavLink to="/customer-reviews">
                            Reviews
                        </NavLink>
                    </div>

                    <div className="navlink-wrapper">
                        <NavLink to="/our-dogs">
                            Our Dogs
                        </NavLink>
                    </div>

                    <div className="navlink-wrapper">
                        <NavLink to="/availability">
                            Availability
                        </NavLink>
                    </div>

                    <div className="navlink-wrapper">
                        <NavLink to="contact-us">
                            Contact
                        </NavLink>
                    </div>

                    <div className="navlink-wrapper margin">
                        <NavLink to="/faq">
                            FAQ
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;