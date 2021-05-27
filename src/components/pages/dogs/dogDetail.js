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

        // imageRef = React.createRef();
    }

    renderDog() {
        return this.props.dogs.map(dog => {
            if (dog.name.toLowerCase() === this.props.match.params.slug) {
                this.props.setDogInfo(dog);
            } else return null;
       })
    }

    componentDidMount() {
        this.renderDog();
    }

    componentDidUpdate() {
        this.renderDog();
    }

    // renderLightbox(img) {
    //     return (
    //         <Lightbox
                
    //         />
    //     )
    // }

    render() {
        const {
            name,
            breedingName,
            color,
            dateOfBirth,
            dimensions={},
            gender,
            images,
            imgProfileUrl
        } = this.props.dog;

        const { weight, height } = dimensions;

        // let { gridColumnEnd, gridRowEnd } = {
        //     gridColumnEnd: '',
        //     gridRowEnd: ''
        // }

        // function getMeta(url){   
        //     var img = new Image();
        //     img.addEventListener("load", function() {
        //         gridColumnEnd = `span ${this.width}`;
        //         gridRowEnd = `span ${this.height}`;
        //     });
        //     img.src = url;
        // }

        return (
            <div className="dog-detail-wrapper">
                <div className="detail-heading-wrapper">
                    <h1 className="dog-name">{name}</h1>

                    <h2 className="breeding-name">{breedingName}</h2>
                </div>

                <div className="detail-information-wrapper">
                    <img className="information-image" src={imgProfileUrl} />

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

                {images ? 
                    <div  className="detail-image-gallery-wrapper">
                        <SRLWrapper>
                        <div className="images">
                            {images.map((img, index) => {
                                    // getMeta(img.src);
                                    return (
                                        <img key={index} src={img.src} alt={img.id} />
                                    )
                                })}
                        </div>
                        </SRLWrapper>                      
                    </div>
                    : 
                    null
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