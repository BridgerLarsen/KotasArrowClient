import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeaderImage from '../headerImage';

import reviewsHeaderImage from '../../static/assests/images/puppiesOnDoorStep.jpg';

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
        axios.get('/api/reviews')
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
        if (this.state.currentReview === this.state.reviews.length - 1 ) {
            this.setState({
                currentReview: 0
            })
        } else {
            this.setState({
                currentReview: this.state.currentReview + 1
            })
        }
    }

    prevSlide() {
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
                    img={reviewsHeaderImage}  
                    height="480px"
                    title="Customer Reviews"
                />

                <div className="review-slider-container">
                    <FontAwesomeIcon icon="chevron-left" onClick={this.prevSlide} />

                    <div className="review-wrapper">
                        {this.state.reviews.map((review, index) => {
                            return (
                                this.state.currentReview === index ? (
                                    <div className="slide" key={index}>
                                        <div className="review">
                                            <p>{review.review}</p>
                                            <h2>{review.name.toUpperCase()}</h2>
                                        </div>
                                    </div>
                                ) : null
                            )
                        })}
                    </div>

                    <FontAwesomeIcon icon="chevron-right" onClick={this.nextSlide} />

                    <div className="review-count">
                        {this.state.currentReview + 1}/{this.state.reviews.length}
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews;