import React, { Component } from 'react';
import { connect } from 'react-redux';

class FaqDetail extends Component {

    // renderFaqs(type) {
    //     return this.props.faqData.map((faq, index) => {
    //         if (faq.type.toLowerCase() === type) {
    //             return (
    //                 <div>
    //                     <h1></h1>
    //                 </div>
    //             )
    //         }
    //     })
    // }

    render() {
        return (
            <div>sfgdsg</div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        faqData: state.faq.faqData
    }
}

FaqDetail = connect(mapStatetoProps, null)(FaqDetail);

export default FaqDetail;