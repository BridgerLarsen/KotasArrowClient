import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import FormButton from '../../formButton';

class FaqsManagerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
            type: "",
            subType: "",
            editMode: false,
            apiAction: "post",
            apiUrl: "http://localhost:5000/api/faqs/add"
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
        if (Object.keys(this.props.faqToEdit).length > 0) {
            const {
                _id,
                type,
                question,
                answer,
                subType
            } = this.props.faqToEdit;

            this.props.clearFaqToEdit();

            this.setState({
                type: type || "",
                question: question || "",
                answer: answer || "",
                subType: subType || "",
                editMode: true,
                apiAction: 'patch',
                apiUrl: `http://localhost:5000/api/faqs/update/${_id}`
            })
        }
    }

    handleSubmit(event) {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: {
                type: this.state.type,
                question: this.state.question,
                answer: this.state.answer,
                subType: this.state.subType
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
                question: "",
                answer: "",
                type: "",
                subType: "",
                editMode: false,
                apiAction: "post",
                apiUrl: "http://localhost:5000/api/reviews/add"
            })
        })
        .catch(err => {
            console.log("Review Mangager handle submit error:", err)
        })

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="faqs-form-wrapper">
                {!this.props.inFaqTypes ? (
                    <div className="faq-form-container">
                        <input
                            className="faqs-form-question form-input"
                            type="text"
                            name="question"
                            placeholder="Question"
                            value={this.state.question}
                            onChange={this.handleInputChange}
                        />

                        <div className="two-column">
                            <input
                                className="faqs-form-type form-input"
                                type="text"
                                name="type"
                                placeholder="Faq Type"
                                value={this.state.type}
                                onChange={this.handleInputChange}
                            />

                            <input
                                className="faqs-form-subType form-input"
                                type="text"
                                name="subType"
                                placeholder="Subtype(If Applicable)"
                                value={this.state.subType}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <textarea
                            className="faqs-form-answer form-input"
                            type="text"
                            name="answer"
                            placeholder="Answer"
                            value={this.state.answer}
                            onChange={this.handleInputChange}
                        />
                    </div>
                ) : this.props.inFaqTypes ? (
                    <div>
                        dfakldh
                    </div>
                ): null}

                {/* <button className="add-faq-types-btn" onClick={() => this.props.handleFaqFormChange()}>
                    Add Faq Types
                </button> */}

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

FaqsManagerForm = connect(mapStateToProps, null)(FaqsManagerForm);

export default FaqsManagerForm;