import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from 'react-redux';

import * as actions from '../../actions';
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
                <div className={`${this.props.isAuthenticated ? 'left-column-nav-links' : null} nav-links`}>
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
                        <NavLink to="/contact-us">
                            Contact
                        </NavLink>
                    </div>

                    <div className="navlink-wrapper margin" style={{ marginRight: '0px' }}>
                        <NavLink to="/faq">
                            FAQ
                        </NavLink>
                    </div>
                </div>

                {this.props.isAuthenticated ? (
                    <div className="right-column-nav-links">
                        <div className="navlink-wrapper">
                            <NavLink to="/site-manager">
                                Site Manager
                            </NavLink>
                        </div>

                        <div className="logout" onClick={() => this.props.logout()}>
                            Logout <FontAwesomeIcon icon="sign-out-alt" /> 
                        </div>
                    </div>
                ) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

Navigation = connect(mapStateToProps, actions)(Navigation);

export default Navigation;