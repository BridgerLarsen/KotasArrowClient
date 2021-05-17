import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="footer-wrapper">
                    <div className="footer-icons">
                        <div className="icon-youtube">
                            <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </div>

                        <div className="icon-instagram">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </div>

                        <div className="icon-facebook">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </div>
                    </div>

                <div className="footer-company-name">
                   <FontAwesomeIcon icon={['far', 'copyright']} /> Kotas Arrow Aussies 2021
                </div>
            </div>
        )
    }
}

export default Footer;