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
            apiUrl: "/api/faqs/add"
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
                apiUrl: `/api/faqs/update/${_id}`
            })
        }
    }

    handleNewTypes(data) {
        let type = {
            exists: false,
            typeData: {}
        };
        let subType = {
            exists: false,
            sub: []
        };

        this.props.faqTypes.map(item => {
            if (item.type === data.type) {
                type.exists = true;
                type.typeData = item

                subType.sub = item.subType

                item.subType.filter(sub => {
                    subType.exists = sub.name === data.subType
                })
            }
        })

        const typesData = () => {
            if (!this.state.subType) {
                return {
                    type: data.type
                }
            } else if (this.state.subType) {
                let subTypeData = subType.sub.map(item => {
                    return { name: item.name }
                }).concat([{ name: data.subType }]);
                
                return {
                    type: data.type,
                    subType: subTypeData
                };
            }
        }

        const apiCall = (method, url) => {
            axios({
                method,
                url,
                data: typesData(),
                headers: {
                    'x-auth-token': this.props.token
                },
                withCredentials: true 
            })
            .then(res => {
                type.exists = false;
                type.typeData = {};
                subType.exists = false;
                subType.sub = [];
                return res;
            })
            .catch(err => {
                console.log(err.response.data, err);
            })
        }

        if (!type.exists) {
            apiCall('post','/api/faqTypes/add');
        } else if (type.exists && !subType.exists) {
            apiCall('patch', `/api/faqTypes/update/${type.typeData._id}`);
        } else {
            return null
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
                this.handleNewTypes(res.data);
            } else {
                this.props.handleNewFormSubmission(res.data)
                this.handleNewTypes(res.data);
            }

            this.setState({
                question: "",
                answer: "",
                type: "",
                subType: "",
                editMode: false,
                apiAction: "post",
                apiUrl: "/api/faqs/add"
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