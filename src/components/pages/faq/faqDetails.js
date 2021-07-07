import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FaqDetail(props) {
    const { onFaqClick, faq, activeFaq } = props;

    return (
        <div className="faq-q-a-wrapper">
            <div className="faq-question" 
            onClick={() => onFaqClick(faq._id)}
            >
                <div>{faq.question}</div>

                {activeFaq === faq._id ?
                    <FontAwesomeIcon icon="minus" />
                    : <FontAwesomeIcon icon="plus" />
                } 
            </div>
            {activeFaq === faq._id ?
                <p className="faq-answer">{faq.answer}</p>
                : null
            }
        </div>
    )
}

class FaqDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFaq: ""
        }

        this.onFaqClick = this.onFaqClick.bind(this);
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
                {this.props.types.map((faqType, index) => {
                    return (
                        <div className="faq-details-wrapper" key={index}>
                            <h3 className="faq-details-type">{faqType.type}</h3>
                            
                            {faqType.type === this.props.subTypeCategory ?
                                faqType.subType.map((subType, index) => {
                                    return (
                                        <div key={index}>
                                            <h4 className="faq-details-subType">{`${index + 1}. ${subType}`}</h4>

                                            
                                            {this.props.faqData.map((faq, index) => {
                                                if (faq.subType && faq.subType === subType) {
                                                    return (
                                                        <FaqDetail 
                                                            key={index}
                                                            faq={faq}
                                                            onFaqClick={this.onFaqClick}
                                                            activeFaq={this.state.activeFaq}
                                                        />
                                                    )
                                                }
                                            })}
                                        </div>
                                    )
                                })
                                : this.props.faqData.map((faq, index) => {
                                    if (faq.type === faqType.type) {
                                        return (
                                            <FaqDetail
                                                key={index}
                                                faq={faq}
                                                onFaqClick={this.onFaqClick}
                                                activeFaq={this.state.activeFaq}
                                            />
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