import React, { Component } from 'react';

import HeaderImg from '../../headerImage';
import Dogs from '../../dogs';

class Females extends Component {
    render() {
        return (
            <div className="females-page-wrapper">
                <HeaderImg 
                    className="females-page-img"
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="Females"
                /> 

                <Dogs page="females"  />
            </div>
        )
    }
}

export default Females;