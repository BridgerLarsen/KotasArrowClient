import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SRLWrapper } from "simple-react-lightbox";

import * as actions from '../../../actions';

class DogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dog: {}
        }
    }

    renderDog() {
        this.props.dogs.map(dog => {
            if (dog.name.toLowerCase() === this.props.match.params.slug) {
                return this.props.setDogInfo(dog);
            } else return null;
       })
    }

    componentDidMount() {
        this.renderDog();
    }

    componentDidUpdate() {
        this.renderDog();
    }

    render() {
        const {
            name,
            breedingName,
            color,
            dateOfBirth,
            dimensions = {},
            gender,
            images = [],
            imgProfileUrl
        } = this.props.dog;

        const { weight, height } = dimensions;

        return (
            <div className="dog-detail-wrapper">
                <div className="detail-heading-wrapper">
                    <h1 className="dog-name">{name}</h1>

                    <h2 className="breeding-name">{breedingName}</h2>
                </div>

                <div className="detail-information-wrapper">
                    <img alt={name} className="information-image" src={imgProfileUrl} />

                    <p className="information-data">
                        Date of Birth: {dateOfBirth}
                        <br/>
                        Color: {color}
                        <br/>
                        Weight: {weight} Pounds
                        <br/>
                        Height: {height} Inches
                        <br/>
                        Gender: {gender}
                        <br/>
                    </p>
                </div>

                {images.length > 0 ? (
                    <div className="detail-image-gallery-wrapper">
                        <SRLWrapper>
                            <div className="images">
                                {images.map((img, index) => {
                                        return (
                                            <img key={index} src={img.src} alt={img.id} />
                                        )
                                    })}
                            </div>
                        </SRLWrapper>                      
                    </div>
                ) : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs.dogs,
        dog: state.dogs.dog
    }
}

DogDetail = connect(mapStateToProps, actions)(DogDetail);

export default DogDetail;