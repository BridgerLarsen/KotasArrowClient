import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderImage from '../headerImage';
import ContentImgDetails from '../contentImgDetails';
import Button from '../buttons';
import Dogs from '../dogs';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homepage-wrapper">
                <HeaderImage 
                    img={"https://greenvalleyaussies.com/assets/uploads/snow-puppies-australian-shepherds-2.jpg"} 
                    className="homepage-img" 
                    height="874px"
                    logo={"https://greenvalleyaussies.com/assets/uploads/2020/01/logo-white-shadow.png"}
                />

                <div className="homepage-content-detail">
                    <div className="content-detail">
                        <h1 className="content-detail-title">    
                            {`Breeding & Raising Quality`} <br/> Australian Shepherds 
                 
                        </h1>

                        <p className="content-detail-description">
                            Green Valley Australian Shepherds objective is raising healthy, well socialized and family-centered <br/>
                            Aussies. We have built a program around the love, care, training and happiness of our dogs!
                        </p>
                    </div>
                </div>

                <div className="homepage-availability">
                    <ContentImgDetails 
                        className="availability" 
                        height="480px"
                        img={"https://greenvalleyaussies.com/assets/uploads/bg__mabey-family-farm.jpg"}
                        title="Wanting to Add a Kota's Arrow Australian Shepherd to your Family?"
                        description="Begin by filling out our Questionnaire and learning more on our FAQ page."
                        buttonHeader="Check Availability"
                    />
                </div>

                <Dogs dogs={this.props.dogs} home={true} />

                <div className="homepage-about-wrapper">
                    <div className="about-container">
                        <div className="about-left-column">
                            <img alt="Home About" className="about-img" src="http://via.placeholder.com/550x464" />     
                        </div>

                        <div className="about-right-column">
                            <div className="about-title">
                                About Us
                            </div>

                            <p className="about-description">
                                Green Valley Australian Shepherds is owned and operated by Jeff and Emily Mabey. Our dogs enjoy a pleasant, fun-filled life near Salt Lake City by the 4 – Generation Mabey Farm in South Jordan. Between our home, Jeff’s Family Farm and Emily’s Family Ranch our dogs have ample room to run for lots of fun and adventures!
                            </p>

                            <Button 
                                className="about-button" 
                                path="/about-us"    
                                buttonHeader="More About Us"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs.dogs
    }
}

Home = connect(mapStateToProps, null)(Home);

export default Home;