import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FaqsManagerForm from './faqsManagerForm';
import FormSideBarList from './formSideBarList';

class FaqsManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faqItems: [],
            faqToEdit: {},
            faqTypes: [],
            inFaqTypes: false
        }

        this.getData = this.getData.bind(this);
        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.clearFaqToEdit = this.clearFaqToEdit.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleFaqFormChange = this.handleFaqFormChange.bind(this);
    }

    getData() {
        axios.get('http://localhost:5000/api/faqs', { withCredentials: true })
        .then(res => {
            this.setState({
                faqItems: res.data.faqs
            })
        })
        .catch(err => {
            console.log("Error with get request:", err) 
        })
    }

    handleNewFormSubmission(faqItem) {
        this.setState({
            faqItems: [faqItem].concat(this.state.faqItems)
        })
    }

    handleEditClick(faqItem) {
        this.setState({
            faqToEdit: faqItem
        })
    }

    handleEditFormSubmission() {
        this.getData();
    }

    clearFaqToEdit() {
        this.setState({
            faqToEdit: {}
        })
    }

    handleDeleteClick(faqItem) {
        axios.delete(
            `http://localhost:5000/api/faqs/delete/${faqItem._id}`,
            { headers: {
                'x-auth-token': this.props.token
            }},
            { withCredentials: true })
        .then(res => {
            this.setState({
                faqItems: this.state.faqItems.filter(item => {
                    return item._id !== faqItem._id;
                })
            })

            return res.data;
        })
        .catch(err => {
            console.log("Error trying to delete item:", err.response.data)
        })
    }

    handleFaqFormChange() {
        if (!this.state.inFaqTypes) {
            this.setState({
                inFaqTypes: true
            })
        } else if (this.state.inFaqTypes) {
            this.setState({
                inFaqTypes: false
            })
        }
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div className="manager-wrapper">
                <div className="left-column">
                    <h2 className="form-title">Add an Faq</h2>

                    <FaqsManagerForm 
                        handleNewFormSubmission={this.handleNewFormSubmission}
                        faqToEdit={this.state.faqToEdit}
                        clearFaqToEdit={this.clearFaqToEdit}
                        handleEditFormSubmission={this.handleEditFormSubmission}
                        inFaqTypes={this.state.inFaqTypes}
                        handleFaqFormChange={this.handleFaqFormChange}
                    />
                </div>

                <div className="right-column">
                    <FormSideBarList 
                        title="Current Faqs"
                        data={this.state.faqItems}
                        handleEditClick={this.handleEditClick}
                        handleDeleteClick={this.handleDeleteClick}
                        inFaqTypes={this.state.inFaqTypes}
                        faqTypes={this.state.faqTypes}
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

FaqsManager = connect(mapStateToProps, null)(FaqsManager);

export default FaqsManager;