import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderImg from '../../headerImage';
import Dogs from '../../dogs';

class Males extends Component {
    render() {
        return (
            <div className="males-page-wrapper">
                <HeaderImg 
                    className="males-page-img"
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="Males"
                /> 

                <Dogs page="males" dogs={this.props.dogs} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs.dogs
    }
}

Males = connect(mapStateToProps, null)(Males);

export default Males;