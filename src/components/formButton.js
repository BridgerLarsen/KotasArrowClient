import React from 'react';

const FormButton = (props) => {
    return (
        <div className="form-button-wrapper">
            <button className="btn" type="submit">
                {props.title}
            </button>
        </div>
    )
}

export default FormButton;