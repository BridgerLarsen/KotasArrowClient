import React, { Component } from "react";

import HeaderImage from '../headerImage'; 

import QuestionnaireHeaderImage from "../../static/assests/images/lightColoredAussie.jpg";

class Questionnaire extends Component {
    constructor() {
        super();

        this.state = {
            documentWidth: "675px"
        }

        window.addEventListener("resize", () => {
            this.onResize();
        }, false);
        this.onResize = this.onResize.bind(this);
    }

    onResize() {
        if (document.documentElement.offsetWidth <= 675) {
            this.setState({
                documentWidth: "345px"
            })
        } else if (document.documentElement.offsetWidth >= 676) {
            this.setState({
                documentWidth: "675px"
            })
        }
    }

    componentDidMount() {
        this.onResize();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize, false);
    }
    render() {
        return (
            <div className="questionnaire-container">
                <HeaderImage 
                    img={QuestionnaireHeaderImage}
                    title="Questionnaire"
                    className="questionnaire-page-image"
                    height="480px"
                />
    
                <div className="form-wrapper">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSddtlyfZQr6qiQn8nTgRJx2-ZA2jfAEl5ILF_8d9nlIBK6x7A/viewform?embedded=true"  
                        title="Google Survey"
                        width={this.state.documentWidth}
                        height="750px"
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0"
                    >
                        {/* <div className="freebirdFormviewerViewFormContentWrapper"></div> */}
                        Loading…
                    </iframe>
                </div>
            </div>
        )
    }
}

export default Questionnaire;