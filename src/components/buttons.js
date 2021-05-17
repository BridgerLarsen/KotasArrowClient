import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <div className={`button ${props.className}`}>
            <Link to={`${props.path}`}>
                {props.buttonHeader.toUpperCase()}
            </Link>
        </div>
    )
}

export default Button;