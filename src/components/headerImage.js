import React from 'react';

function HeaderImage(props) {
    return (
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
        >
        </div>

    )
}

export default HeaderImage;