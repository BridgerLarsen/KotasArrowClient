import React from 'react';

function HeaderImage(props) {
    return (
        <div className="img" 
            style={
                {
                    backgroundImage: `url(${props.img})`,
                    width: "100%",
                    minHeight: "880px"
                }
            }
        >
        </div>

    )
}

export default HeaderImage;