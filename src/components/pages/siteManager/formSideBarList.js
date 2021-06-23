import React from 'react';

const FormSideBarList = props => {
    const managerList = props.data.map(item => {
        return (
            <div key={item._id} className="manager-list-container">
                <div className="list-thumb">
                    <p>{item.review}</p>
                </div>

                <div className="list-name">
                    {item.name}
                </div>
            </div>
        )
    })

    return (
        <div className="manager-side-bar-list-wrapper">
            <h1 className="side-bar-list-title">{props.title}</h1>

            {managerList}
        </div>
    )
}

export default FormSideBarList;