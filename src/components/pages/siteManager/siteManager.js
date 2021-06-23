import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
// import axios from 'axios';

import ReviewsManager from './reviewsManager';
import DogsManager from './dogsManager';
import FaqsManager from './faqsManager';

// import HeaderImage from '../../headerImage';

class SiteManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeManager: "reviews"
        }

        this.setActiveManager = this.setActiveManager.bind(this);
    }

    setActiveManager(manager) {
        this.setState({
            activeManager: manager
        })
    }

    renderManagerForm() {
        if (this.state.activeManager === "reviews") {
            return (
                <ReviewsManager />
            )
        } else if (this.state.activeManager === "dogs") {
            return (
                <DogsManager />
            )
        } else if (this.state.activeManager === "faqs") {
            return (
                <FaqsManager />
            )
        }
    }



    render() {
        return (
            <div className="site-manager-wrapper">
                <div className="manager-links-wrapper">
                    <h1 className="manager-link">
                        <div className={`${this.state.activeManager === 'reviews' ? 'active' : 'inactive-link'}`} onClick={() => this.setActiveManager("reviews")} to="/site-manager/reviews">
                            Manage Reviews
                        </div>
                    </h1>

                    <h1 className="manager-link">
                        <div className={`${this.state.activeManager === 'dogs' ? 'active' : 'inactive-link'}`} onClick={() => this.setActiveManager("dogs")} to="/site-manager/dogs">
                            Manage Dogs
                        </div>
                    </h1>

                    <h1 className="manager-link">
                        <div className={`${this.state.activeManager === 'faqs' ? 'active' : 'inactive-link'}`} onClick={() => this.setActiveManager("faqs")} to="/site-manager/faqs">
                            Manage Faqs
                        </div>
                    </h1>
                </div>

                <div className="manager-forms-wrapper">
                    {this.renderManagerForm()}
                </div>
            </div>
        )
    }
}

export default SiteManager;