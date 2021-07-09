import React, { Component } from 'react';

import HeaderImage from '../../headerImage';
import Dogs from '../../dogs';

import ourDogsHeaderImage from '../../../static/assests/images/puppies.jpg';

class OurDogs extends Component {
    render() {
        return (
            <div className="our-dogs-page-wrapper">
                <HeaderImage 
                    className="our-dogs-img"  
                    img={ourDogsHeaderImage}  
                    height="480px"
                    title="Our Aussies"
                />

                <Dogs dogs={this.props.dogs} />
            </div>
        )
    }
}

export default OurDogs;