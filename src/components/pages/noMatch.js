import React from 'react';

import Button from '../buttons';

export default function() {
    return (
        <div className="no-match-page-wrapper">
            <div className="left-side">
                <div className="headings-wrapper">
                    <h1 className="code-heading">
                        404
                    </h1>

                    <h1 className="detail-heading">
                        Sorry, page could not be found
                    </h1>
                </div>

                <div className="btn-wrapper">
                    <Button className="no-match-button" path="/" buttonHeader="Return to Homepage" />
                </div>
            </div>

            <div className="right-side">
                <img src="http://via.placeholder.com/1000x1000" />
            </div>
        </div>
    )
}