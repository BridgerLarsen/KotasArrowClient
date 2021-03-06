import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HeaderImage from '../headerImage';

import contactHeaderImage from '../../static/assests/images/groupOfDogsSitting.jpg';

class Contact extends Component {
    render() {
        return (
            <div className="contact-us-container">
                <HeaderImage 
                    img={contactHeaderImage} 
                    className="contact-img" 
                    height="480px"
                    title="Contact Us"
                />

                <div className="contact-information-wrapper">
                    <div className="left-column">
                        <h4 className="information-name">
                            Kota's Arrow
                        </h4 >

                        <h4 className="information-number">
                            Phone: 888-888-8888
                        </h4>

                        <h4 className="information-email">
                            Email: kotasArrow@example.com
                        </h4>

                        <h4 className="information-location">
                            Alpine, Utah
                        </h4>
                    </div>

                    <div className="right-column">
                        <p className="contact-detail">To Learn more about our dogs, please contact us!</p>

                        <Link 
                            to="/faq" 
                            className="contact-faq-link"
                        >
                            Please check our FAQ page for answers to commonly asked questions.
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;