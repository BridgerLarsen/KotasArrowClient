import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                    <div className="footer-icons">
                        <a target="_blank" href="" className="icon-youtube">
                            <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </a>

                        <a target="_blank" href="" className="icon-instagram">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>

                        <a target="_blank" href="" className="icon-facebook">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                        </a>
                    </div>

                <div className="footer-company-name">
                   <FontAwesomeIcon icon={['far', 'copyright']} /> Kotas Arrow Aussies 2021
                </div>
            </div>
        )
    }
}

export default Footer;