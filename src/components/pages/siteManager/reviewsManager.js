import React, { Component } from 'react';
import axios from 'axios';

import ReviewsManagerForm from './reviewsManagerForm';
import FormSideBarList from './formSideBarList';

class ReviewsManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }

        this.getData = this.getData.bind(this);
    }

    getData() {
        axios.get('http://localhost:5000/api/reviews', { withCredentials: true })
        .then(res => {
            this.setState({
                data: res.data.reviews
            })
        })
        .catch(err => {
            console.log("Error with get request:", err) 
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

                        <ReviewsManagerForm />
                    </div>

                    <div className="right-column">
                        <FormSideBarList data={this.state.data} title="Current Reviews" /> 
                    </div>   
            </div>
        )
    }
}

export default ReviewsManager;