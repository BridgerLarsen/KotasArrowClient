import React, { Component } from 'react';

import HeaderImage from '../headerImage';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="homepage-wrapper">
                <HeaderImage img={"http://localhost:3000/images/img.jpg"} />
            </div>
        )
    }
}

export default Home;