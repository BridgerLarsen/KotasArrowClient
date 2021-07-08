import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FormSideBarList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFaqAnswer: ""
        }

        this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer(id) {
        if (!this.state.showFaqAnswer) {
            this.setState({
                showFaqAnswer: id
            })
        } else if (this.state.showFaqAnswer === id) {
            this.setState({
                showFaqAnswer: ""
            })
        } else if (this.state.showFaqAnswer && id) {
            this.setState({
                showFaqAnswer: id
            })
        } 
    }
 
    render() {
        const managerList = this.props.data.map(item => {
            return (
                <div key={item._id} className="manager-list-container">
                    {item.review ? (
                        <div className="list-thumb">
                            <p>{item.review}</p>
                        </div>
                    ) : item.imgProfileUrl ? (
                        <div className="list-thumb">
                            <img alt={item.name} src={item.imgProfileUrl} />
                        </div>
                    ) : item.question ? (
                        <div className="list-thumb">
                            <h3 className="faq-thumb-heading question-heading">Question</h3>
                            <p className="question">{item.question}</p>
    
                            <h4 className="faq-thumb-subHeading">Faq Type: {item.type}</h4>
    
                            {item.subType ? (
                                <h4 className="faq-thumb-subHeading">Faq SubType: {item.subType}</h4>
                            ) : null}

                            <h3 className="faq-thumb-heading answer-heading" onClick={() => this.toggleAnswer(item._id)}>Answer</h3>
                            
                            {this.state.showFaqAnswer === item._id ? (
                                <p className="answer">{item.answer}</p>
                            ) : null}
                        </div>
                    ) : null}
    
                    <div className="name-actions-wrapper">
                        <div className="list-name">
                            {item.name}
                        </div>
    
                        <div className="action-icons">
                            <div className="action-icon" onClick={() => this.props.handleEditClick(item)}>
                                <FontAwesomeIcon icon={['far', "edit"]} />
                            </div>
    
                            <div className="action-icon" onClick={() => this.props.handleDeleteClick(item)}>
                                <FontAwesomeIcon icon="trash" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="manager-side-bar-list-wrapper">
                <h1 className="side-bar-list-title">{this.props.title}</h1>
    
                {managerList}
            </div>
        )
    }
}

export default FormSideBarList;