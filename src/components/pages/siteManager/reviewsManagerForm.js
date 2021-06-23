import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FormButton from '../../formButton';

class ReviewsManagerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            review: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const options = {
            headers: {
                'x-auth-token': this.props.token
            }
        }

        axios.post('http://localhost:5000/api/reviews/add',
        {
            name: this.state.name,
            review: this.state.review
        },
        options,
        { withCredentials: true }
        )
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log("Review Mangager handle submit error:", err.response.data)
        })

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="reviews-form-wrapper">
                <input
                    className="reviews-form-name form-input"
                    type="text"
                    name="name"
                    placeholder="Reviewer Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />

                <textarea
                    className="reviews-form-review form-input"
                    type="text"
                    name="review"
                    placeholder="Review"
                    value={this.state.review}
                    onChange={this.handleInputChange}
                />

                <FormButton title="Save" /> 
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

ReviewsManagerForm = connect(mapStateToProps, null)(ReviewsManagerForm);

export default ReviewsManagerForm;