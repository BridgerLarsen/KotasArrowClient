import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import DogsManagerForm from './dogsManagerForm';
import FormSideBarList from './formSideBarList';

class DogsManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dogItems: []
        }

        this.getData = this.getData.bind(this);
        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleNewFormSubmission(dogItem) {
        this.setState({
            dogItems: [dogItem].concat(this.state.dogItems)
        })
    }

    handleDeleteClick(dogItem) {
        axios.delete(
            `http://localhost:5000/api/dogs/delete/${dogItem._id}`,
            { headers: {
                'x-auth-token': this.props.token
            }},
            { withCredentials: true })
        .then(res => {
            this.setState({
                dogItems: this.state.dogItems.filter(item => {
                    return item._id !== dogItem._id;
                })
            })

            return res.data;
        })
        .catch(err => {
            console.log("Error trying to delete item:", err.response.data)
        })
    }

    getData() {
        axios.get('http://localhost:5000/api/dogs',
        { withCredentials: true })
        .then(res => {
            this.setState({
                dogItems: res.data.dogs
            })
        })
        .catch(err => {
            console.log("Error with the request:", err)
        })
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div className="manager-wrapper">
                    <div className="left-column">
                    <h2 className="form-title">Add a Dog</h2>

                        <DogsManagerForm
                            handleNewFormSubmission={this.handleNewFormSubmission}
                            // // handleEditFormSubmission={this.handleEditFormSubmission}
                            // getData={this.getData}
                            // reviewToEdit={this.state.reviewToEdit}
                            // clearReviewToEdit={this.clearReviewToEdit}
                        />
                    </div>

                    <div className="right-column">
                        <FormSideBarList 
                            title="Current Dogs"
                            data={this.state.dogItems}  
                            handleDeleteClick={this.handleDeleteClick}
                            // handleEditClick={this.handleEditClick}
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

DogsManager = connect(mapStateToProps, null)(DogsManager);

export default DogsManager;