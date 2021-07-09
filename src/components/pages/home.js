import React, { Component } from 'react';

import HeaderImage from '../headerImage';
import ContentImgDetails from '../contentImgDetails';
import Button from '../buttons';
import Dogs from '../dogs';

import headerImage from '../../static/assests/images/puppies.jpg';
import aboutUsImage from '../../static/assests/images/puppiesTwo.jpg';
import dogAndLake from '../../static/assests/images/dogAndLake.jpg';

class Home extends Component {
    render() {
        return (
            <div className="homepage-wrapper">
                <HeaderImage 
                    img={headerImage} 
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
                        img={dogAndLake}
                        title="Wanting to Add a Kota's Arrow Australian Shepherd to your Family?"
                        description="Begin by filling out our Questionnaire and learning more on our FAQ page."
                        buttonHeader="Check Availability"
                        path="/availability"
                    />
                </div>

                <Dogs home={true} />

                <div className="homepage-about-wrapper">
                    <div className="about-container">
                        <div className="about-left-column">
                            <img alt="Home About" className="about-img" src={aboutUsImage} />     
                        </div>

                        <div className="about-right-column">
                            <div className="about-title">
                                About Us
                            </div>

                            <p className="about-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptas ut perferendis. Dignissimos amet beatae perspiciatis est labore, ratione dolor rem ut hic ipsa delectus quaerat voluptates quam sint architecto minus sunt velit dolorum et animi. Velit cupiditate non harum recusandae. Maxime velit odio reiciendis, cupiditate veritatis dignissimos repellat quasi ipsam vel. Dolor modi exercitationem deleniti et!
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

export default Home;