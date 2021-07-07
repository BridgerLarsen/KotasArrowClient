import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../actions';

import HeaderImage from '../../headerImage';
import FaqDetails from './faqDetails';

class FAQ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            types: [],
            subTypeCategory: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/faqs')
        .then(res => {
            this.props.setFaqData(res.data.faqs);
            res.data.faqs.map((faq, index) => {
                if (faq.subType) {
                    this.setState({
                        subTypeCategory: faq.type
                    })
                }
            })
        })
        .catch(err => {
            console.log("Error with faq get request", err);
        })

        axios.get('http://localhost:5000/api/faqTypes', { withCredentials: true })
        .then(res => {
            console.log(res.data.faqTypes);
            this.setState({
                types: res.data.faqTypes.map(faqType => {
                    return faqType
                })
            })
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
                    <div className="faqs-content">
                        <h2 className="faqs-heading">Frequently Asked Questions</h2>

                        <div className="faqs">
                            <FaqDetails 
                                types={this.state.types} 
                                subTypes={this.state.subTypes}
                                subTypeCategory={this.state.subTypeCategory}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        faqData: state.faq.faqData
    }
}

FAQ = connect(mapStatetoProps, actions)(FAQ);

export default FAQ;