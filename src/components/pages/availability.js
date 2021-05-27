import React, { Component } from 'react';

import HeaderImage from '../headerImage';

class Availability extends Component {
    render() {
        return (
            <div className="availability-container">
                <HeaderImage 
                    className="availablity"
                    img="http://via.placeholder.com/1000x1000" 
                    height="480px"
                    title="Availability"
                />
            </div>
        )
    }
}

export default Availability;