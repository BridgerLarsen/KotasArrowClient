import React, { Component } from 'react';

class DogDetail extends Component {
    render() {
        return (
            <div>
                hello {this.props.match.params.slug}
            </div>
        )
    }
}

export default DogDetail;