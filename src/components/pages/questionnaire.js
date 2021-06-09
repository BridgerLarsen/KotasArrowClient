import React, { Component } from "react";
import ReactDOM from 'react-dom';

import HeaderImage from '../headerImage'; 

class Questionnaire extends Component {
    constructor() {
        super();

        this.state = {
            iFrameHeight: '906px'
        }

        // this.onLoad = this.onLoad.bind(this);

        this.iframe = React.createRef();
    }

    // onLoad() {
    //     this.setState({
    //         "iFrameHeight":  `${this.iframe.contentWindow.document.body.current.scrollHeight}px`
    //     });
    // }


    render() {
        return (
            <div className="questionnaire-container">
                <HeaderImage 
                    img="http://via.placeholder.com/1000x1000"
                    title="Questionnaire"
                    className="questionnaire-page-image"
                    height="480px"
                />

                <div className="form-wrapper">
                    <iframe 
                        ref={this.iframe}
                        src="https://docs.google.com/forms/d/e/1FAIpQLSddtlyfZQr6qiQn8nTgRJx2-ZA2jfAEl5ILF_8d9nlIBK6x7A/viewform?embedded=true"  
                        // onLoad={}
                        width="675px"
                        height={this.state.iFrameHeight}
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        )
    }
}

export default Questionnaire;