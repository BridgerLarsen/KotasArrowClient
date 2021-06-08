import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FaqDetail(props) {
    return (
        props.faqData.map((faq, index) => {
            if (faq.subType && faq.subType === props.subType) {
                return (
                    <div key={index} className="faq-q-a-wrapper">
                        <div className="faq-question" onClick={() => props.onFaqClick(faq._id)}>
                            <div key={index} >{faq.question}</div>

                            {props.activeFaq === faq._id ?
                                <FontAwesomeIcon icon="minus" />
                                : <FontAwesomeIcon icon="plus" />
                            } 
                        </div>
                        {props.activeFaq === faq._id ?
                            <p className="faq-answer">{faq.answer}</p>
                            : null
                        }
                    </div>
                )
            }
        })
    )
}

class FaqDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            types: [
                "Contacting Us",
                "Purchasing a Puppy"
            ],
            subTypes: [
                "Application",
                "Deposit",
                "Choosing Your Puppy",
                "Final Payment",
                "Recieving Your Aussie"
            ],
            subTypeCategory: [],
            activeFaq: ""
        }

        this.onFaqClick = this.onFaqClick.bind(this);
    }

    componentDidMount() {
        this.props.faqData.map((faq, index) => {
            if (faq.subType) {
                this.setState({
                    subTypeCategory: faq.type
                })
            }
        })
    }

    onFaqClick(id) {
        if (this.state.activeFaq === "") {
            this.setState({
                activeFaq: id
            })
        } else if (this.state.activeFaq) {
            this.setState({
                activeFaq: ""
            })
        }
    }


    render() {
        return (
            <div className="faq-detail-container">
                {this.state.types.map((type, index) => {
                    return (
                        <div className="faq-details-wrapper" key={index}>
                            <h3 className="faq-details-type">{type}</h3>
                            
                            {type === this.state.subTypeCategory ?
                                this.state.subTypes.map((subType, index) => {
                                    return (
                                        <div key={index}>
                                            <h4 className="faq-details-subType">{`${index + 1}. ${subType}`}</h4>

                                            <FaqDetail 
                                                faqData={this.props.faqData} subType={subType} 
                                                onFaqClick={this.onFaqClick}
                                                activeFaq={this.state.activeFaq}
                                            />
                                        </div>
                                    )
                                })
                                : this.props.faqData.map((faq, index) => {
                                    if (faq.type === type) {
                                        return (
                                            <div key={index} className={`faq-q-a-wrapper ${this.state.activeFaq ? "active" : ""}`}>
                                                <div 
                                                    className="faq-question" 
                                                    onClick={() => this.onFaqClick(faq._id)} 
                                                >
                                                    <div>{faq.question}</div>

                                                    {this.state.activeFaq === faq._id ?
                                                        <FontAwesomeIcon icon="minus" />
                                                        : <FontAwesomeIcon icon="plus" />
                                                    } 
                                                </div>
                                                {this.state.activeFaq === faq._id ?
                                                    <p className="faq-answer" >{faq.answer}</p>
                                                    : null
                                                }
                                            </div>
                                        )
                                    }
                                })
                            } 
                        </div>
                    )
                })}
            </div>
        )
    }
}



const mapStatetoProps = (state) => {
    return {
        faqData: state.faq.faqData
    }
}

FaqDetails = connect(mapStatetoProps, null)(FaqDetails);

export default FaqDetails;