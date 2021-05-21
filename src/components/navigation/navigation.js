import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DropDown from './dropdown';

class Navigation extends Component {
    constructor() {
        super();

        this.state = {
            dropdown: false 
        }

        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter() {
        this.setState({
            dropdown: true
        })
    }

    mouseLeave() {
        this.setState({
            dropdown: false
        })
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

                    <div 
                        className="navlink-wrapper"
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        >

                        <div className={`${this.state.dropdown ? "drop-down-active" : "drop-down-inactive"}` }>
                            <NavLink to="/our-aussies">
                                Our Aussies <FontAwesomeIcon icon="sort-down" />
                            </NavLink>

                            {this.state.dropdown ? 
                                <DropDown />
                            : 
                            null
                            }
                        </div>
                    </div>

                    <div 
                        className="navlink-wrapper"   
                    >
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