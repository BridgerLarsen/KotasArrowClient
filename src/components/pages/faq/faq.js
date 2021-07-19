import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../../../actions';

import HeaderImage from '../../headerImage';
import FaqDetails from './faqDetails';

import faqHeaderImage from '../../../static/assests/images/australianShepherd.jpg';

class FAQ extends Component {
    constructor(props) {
        super(props);

        this.state = {
            types: [],
            typesIncludesubTypes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/faqs')
        .then(res => {
            this.props.setFaqData(res.data.faqs);
        })
        .catch(err => {
            console.log("Error with faq get request", err);
        })

        axios.get('http://localhost:5000/api/faqTypes', { withCredentials: true })
        .then(res => {
            let subTypesArray = [];

            res.data.faqTypes.map(item => {
                if (item.subType.length > 0) {
                    subTypesArray.push(item.type)
                }
            })
            
            this.setState({
                types: res.data.faqTypes.map(item => {
                    return item
                }),
                typesIncludesubTypes: subTypesArray
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="faq-container">
                <HeaderImage 
                    className="faq-page-img"  
                    img={faqHeaderImage}  
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
                                typesIncludesubTypes={this.state.typesIncludesubTypes}
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