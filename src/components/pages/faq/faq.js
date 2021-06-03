import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../actions';

import HeaderImage from '../../headerImage';
import FaqDetail from './faqDetail';

class FAQ extends Component {

    componentDidMount() {
        axios.get('http://localhost:5000/api/faqs')
        .then(res => {
            this.props.setFaqData(res.data.faqs);
        })
        .catch(err => {
            console.log("Error with faq get request", err);
        })
    }

    render() {
        return (
            <div className="faq-container">
                <HeaderImage 
                    className="faq-page-img" 
                    img="http://via.placeholder.com/1000x1000"  
                    height="480px"
                    title="FAQ"
                />

                <div className="faqs-wrapper">
                    <h1 className="faqs-heading">Answers to Commonly Asked Questions</h1>

                    <FaqDetail />
                </div>
            </div>
        )
    }
}

FAQ = connect(null, actions)(FAQ);

export default FAQ;