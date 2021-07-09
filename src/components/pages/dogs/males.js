import React, { Component } from 'react';

import HeaderImg from '../../headerImage';
import Dogs from '../../dogs';

import malesHeaderImage from '../../../static/assests/images/puppies.jpg';

class Males extends Component {
    render() {
        return (
            <div className="males-page-wrapper">
                <HeaderImg 
                    className="males-page-img"
                    img={malesHeaderImage}  
                    height="480px"
                    title="Males"
                /> 

                <Dogs page="males" dogs={this.props.dogs} />
            </div>
        )
    }
}

export default Males;