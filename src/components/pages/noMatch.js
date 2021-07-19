import React from 'react';

import Button from '../buttons';

export default function NoMatch() {
    return (
        <div className="no-match-page-wrapper">
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
    )
}