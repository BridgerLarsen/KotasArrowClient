import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import ReviewsManagerForm from './reviewsManagerForm';
import FormSideBarList from './formSideBarList';

class ReviewsManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviewItems: [],
            reviewToEdit: {}
        }

        this.getData = this.getData.bind(this);
        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearReviewToEdit = this.clearReviewToEdit.bind(this);
    }

    getData() {
        axios.get('http://localhost:5000/api/reviews', { withCredentials: true })
        .then(res => {
            this.setState({
                reviewItems: res.data.reviews
            })
        })
        .catch(err => {
            console.log("Error with get request:", err) 
        })
    }

    handleNewFormSubmission(reviewItem) {
        this.setState({
            reviewItems: [reviewItem].concat(this.state.reviewItems)
        })
    }

    handleEditFormSubmission() {
        this.getData();
    }

    handleEditClick(reviewItem) {
        this.setState({
            reviewToEdit: reviewItem
        })
    }

    clearReviewToEdit() {
        this.setState({
            reviewToEdit: {}
        })
    }

    handleDeleteClick(reviewItem) {
        axios.delete(
            `http://localhost:5000/api/reviews/delete/${reviewItem._id}`,
            { headers: {
                'x-auth-token': this.props.token
            }},
            { withCredentials: true })
        .then(res => {
            this.setState({
                reviewItems: this.state.reviewItems.filter(item => {
                    return item._id !== reviewItem._id;
                })
            })

            return res.data;
        })
        .catch(err => {
            console.log("Error trying to delete item:", err.response.data)
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className="manager-wrapper">
                    <div className="left-column">
                    <h2 className="form-title">Add a Review</h2>

                        <ReviewsManagerForm
                            handleNewFormSubmission={this.handleNewFormSubmission}
                            handleEditFormSubmission={this.handleEditFormSubmission}
                            getData={this.getData}
                            reviewToEdit={this.state.reviewToEdit}
                            clearReviewToEdit={this.clearReviewToEdit}
                        />
                    </div>

                    <div className="right-column">
                        <FormSideBarList 
                            title="Current Reviews"
                            data={this.state.reviewItems}  
                            handleDeleteClick={this.handleDeleteClick}
                            handleEditClick={this.handleEditClick}
                        /> 
                    </div>   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

ReviewsManager = connect(mapStateToProps, null)(ReviewsManager);

export default ReviewsManager;