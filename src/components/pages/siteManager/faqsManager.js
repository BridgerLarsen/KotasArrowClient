import React, { Component } from 'react';
import axios from 'axios';

import FormSideBarList from './formSideBarList';

class FaqsManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faqItems: []
        }

        this.getData = this.getData.bind(this);
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

    componentDidMount() {
        this.getData();
    }
    render() {
        return (
            <div className="manager-wrapper">
                <div className="left-column">
                    <h2 className="form-title">Add a Faq</h2>

                    
                </div>

                <div className="right-column">
                    <FormSideBarList 
                        title="Current Faqs"
                        data={this.state.faqItems}
                    />
                </div>
            </div>
        )
    }
}

export default FaqsManager;