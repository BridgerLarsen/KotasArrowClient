import React, { Component } from 'react';

import HeaderImage from '../headerImage';

class Reviews extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="review-page-wrapper">
                <HeaderImage
                    className="review-page-img" 
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="Customer Reviews"
                />
            </div>
        )
    }
}

export default Reviews;