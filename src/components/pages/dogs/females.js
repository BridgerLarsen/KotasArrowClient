import React, { Component } from 'react';

import HeaderImg from '../../headerImage';
import Dogs from '../../dogs';

import femalesHeaderImage from '../../../static/assests/images/puppies.jpg';

class Females extends Component {
    render() {
        return (
            <div className="females-page-wrapper">
                <HeaderImg 
                    className="females-page-img"
                    img={femalesHeaderImage}  
                    height="480px"
                    title="Females"
                /> 

                <Dogs page="females"  />
            </div>
        )
    }
}

export default Females;