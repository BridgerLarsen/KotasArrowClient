import React from "react";

import HeaderImage from '../headerImage'; 

import QuestionnaireHeaderImage from "../../static/assests/images/lightColoredAussie.jpg";

const Questionnaire = () => {
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
                    width="675px"
                    height="750px"
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

export default Questionnaire;