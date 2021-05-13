import React, { Component } from 'react';

import HeaderImage from '../headerImage';
import ContentImgDetails from '../contentImgDetails';
import Button from '../buttons';

class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="homepage-wrapper">
                <HeaderImage 
                    img={"https://greenvalleyaussies.com/assets/uploads/snow-puppies-australian-shepherds-2.jpg"} 
                    className="homepage-img" 
                    height="950px"
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

                <div className="homepage-availabilty">
                    <ContentImgDetails 
                        className="availability" 
                        height="480px"
                        img={"https://greenvalleyaussies.com/assets/uploads/bg__mabey-family-farm.jpg"}
                        title="Wanting to Add a Kota's Arrow Australian Shepherd to your Family?"
                        description="Begin by filling out our Questionnaire and learning more on our FAQ page."
                        buttonHeader="Check Availability"
                    />
                </div>

                <div className="homepage-about">
                    <div    
                        className="about-img" 
                        style={
                            {
                                backgroundImage: "url(http://via.placeholder.com/550x464)",
                            }
                        } 
                    />

                    <div className="about-title">
                        About Us
                    </div>

                    <p className="about-description">
                        Green Valley Australian Shepherds is owned and operated by Jeff and Emily Mabey. Our dogs enjoy a pleasant, fun-filled life near Salt Lake City by the 4 – Generation Mabey Farm in South Jordan. Between our home, Jeff’s Family Farm and Emily’s Family Ranch our dogs have ample room to run for lots of fun and adventures!
                    </p>

                    <Button 
                        className="about" 
                        path="/about-us"    
                        buttonHeader="More About Us"
                    />
                </div>
            </div>
        )
    }
}

export default Home;