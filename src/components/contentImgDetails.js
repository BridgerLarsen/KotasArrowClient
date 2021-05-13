import React from 'react';

import Button from './buttons';

function ContentImgDetails(props) {
    return (
        <div className={`${props.className}-content-wrapper`}>
            <div 
                className={`${props.className}-img`} 
                style= {
                    {
                        backgroundImage: `url(${props.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center, center",
                        width: "100%",
                        height: props.height
                    }
                }
            />

            <div className={`${props.className}-details`}>
                <div className="details-title">
                    {props.title}
                </div>

                <div className="details-description">
                    {props.description}
                </div>

                <div className="details-button">
                    <Button 
                        className="details"         
                        path="/availability"
                        buttonHeader={props.buttonHeader}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentImgDetails;