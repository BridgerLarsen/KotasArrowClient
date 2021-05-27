import React from 'react';

import Button from './buttons';

function ContentImgDetails(props) {
    const { 
        className, 
        img,
        height, 
        title, 
        description, 
        buttonHeader,
        path 
    } = props;

    return (
        <div className={`${className}-content-wrapper`}>
            <div 
                className={`${className}-img`} 
                style= {
                    {
                        backgroundImage: `url(${img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center, center",
                        width: "100%",
                        height: height
                    }
                }
                alt="img"
            />

            <div className={`${className}-details`}>
                <div className="details-title">
                    {title}
                </div>

                <div className="details-description">
                    {description}
                </div>

                <div className="details-button">
                    <Button 
                        className="details"         
                        path={path}
                        buttonHeader={buttonHeader}
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentImgDetails;