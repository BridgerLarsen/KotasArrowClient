import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeaderImage from '../headerImage';
import Footer from '../footer';

class Reviews extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            currentReview: 0
        }

        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/reviews')
            .then(response => {
                this.setState({
                    reviews: response.data.reviews
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    nextSlide() {
        // console.log("Next Slide")
        if (this.state.currentReview === this.state.reviews.length - 1 ) {
            this.setState({
                currentReview: 0
            })
        } else {
            this.setState({
                currentReview: + 1
            })
        }
    }

    prevSlide() {
        // console.log("Previous Slide")
        if (this.state.currentReview === 0) {
            this.setState({
                currentReview: this.state.reviews.length - 1
            })
        } else {
            this.setState({
                currentReview: this.state.currentReview - 1
            })
        }
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

                <div className="review-slider-container">
                    <FontAwesomeIcon icon="chevron-left" onClick={this.prevSlide} />

                    <div className="review-wrapper">
                        {this.state.reviews.map((review, index) => {
                            return (
                                <div className="slide" key={index}>
                                    {this.state.currentReview === index ? (
                                        <div className="review">
                                            <p>{review.review}</p>
                                            <h2>{review.name.toUpperCase()}</h2>
                                        </div>
                                    ) 
                                    : null
                                    }
                                </div>
                            )
                        })}
                    </div>

                    <FontAwesomeIcon icon="chevron-right" onClick={this.nextSlide} />

                    <div className="review-count">
                        {this.state.currentReview + 1}/{this.state.reviews.length}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Reviews;