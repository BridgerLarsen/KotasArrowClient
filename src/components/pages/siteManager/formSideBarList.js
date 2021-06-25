import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormSideBarList = props => {
    const managerList = props.data.map(item => {
        return (
            <div key={item._id} className="manager-list-container">
                {item.review ? (
                    <div className="list-thumb">
                        <p>{item.review}</p>
                    </div>
                ) : item.imgProfileUrl ? (
                    <div className="list-thumb">
                        <img src={item.imgProfileUrl} />
                    </div>
                ) : null}

                <div className="name-actions-wrapper">
                    <div className="list-name">
                        {item.name}
                    </div>

                    <div className="action-icons">
                        <div className="action-icon" onClick={() => props.handleEditClick(item)}>
                            <FontAwesomeIcon icon={['far', "edit"]} />
                        </div>

                        <div className="action-icon" onClick={() => props.handleDeleteClick(item)}>
                            <FontAwesomeIcon icon="trash" />
                        </div>
                    </div>
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