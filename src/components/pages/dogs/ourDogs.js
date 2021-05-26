import React, { Component } from 'react';

import HeaderImage from '../../headerImage';
import Dogs from '../../dogs';

class OurDogs extends Component {
    render() {
        return (
            <div className="our-dogs-page-wrapper">
                <HeaderImage 
                    className="our-dogs-img"  
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="Our Aussies"
                />

                <Dogs dogs={this.props.dogs} />
            </div>
        )
    }
}

export default OurDogs;