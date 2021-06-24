import React, { Component } from 'react';
import axios from 'axios';

import DogsManagerForm from './dogsManagerForm';
import FormSideBarList from './formSideBarList';

class DogsManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dogItems: []
        }

        this.getData = this.getData.bind(this);
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
                            // handleNewFormSubmission={this.handleNewFormSubmission}
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
                            // handleDeleteClick={this.handleDeleteClick}
                            // handleEditClick={this.handleEditClick}
                        /> 
                    </div>   
            </div>
        )
    }
}

export default DogsManager;