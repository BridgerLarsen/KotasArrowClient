import React from 'react';

function HeaderImage(props) {
    return (
        <div className="header-image-wrapper">
            <div className={props.className} 
                style={
                    {
                        backgroundImage: `url(${props.img})`,
                        width: "100%",
                        minHeight: props.height,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center, center",
                    }
                }
            />

            {props.logo ? 
                <img alt="img" src={props.logo} className="header-image-logo" />
            : 
                <h1 className="header-image-title">{props.title}</h1>
            }
        </div>
    )
}

export default HeaderImage;