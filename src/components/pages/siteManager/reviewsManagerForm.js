import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FormButton from '../../formButton';

class ReviewsManagerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            review: "",
            editMode: false,
            apiAction: "post",
            apiUrl: "/api/reviews/add"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidUpdate() {
        if (Object.keys(this.props.reviewToEdit).length > 0) {
            const {
                name,
                review,
                _id
            } = this.props.reviewToEdit;

            this.props.clearReviewToEdit();

            this.setState({
                name: name || "",
                review: review || "",
                editMode: true,
                apiAction: 'patch',
                apiUrl: `/api/reviews/update/${_id}`
            })
        }
    }

    handleSubmit(event) {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: {
                name: this.state.name,
                review: this.state.review
            },
            headers: {
                'x-auth-token': this.props.token
            },
            withCredentials: true
        })
        .then(res => {
            if (this.state.editMode) {
                this.props.handleEditFormSubmission();
            } else {
                this.props.handleNewFormSubmission(res.data)
            }

            this.setState({
                name: "",
                review: "",
                editMode: false,
                apiAction: "post",
                apiUrl: "/api/reviews/add"
            })
        })
        .catch(err => {
            console.log("Review Mangager handle submit error:", err)
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