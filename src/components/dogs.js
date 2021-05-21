import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Dogs extends Component {
    constructor(props) {
        super(props);
    }

    renderDogs(dogs) {
        if (dogs) {
            return dogs.map(dog => {
                return (
                    <NavLink 
                        to={`our-aussies/${dog.gender.toLowerCase()}s/${dog.name.toLowerCase()}`} 
                        className="dog" 
                        key={dog._id}
                    >
                        <img src={dog.imgProfileUrl} />
    
                        <h1 className="dog-name">{dog.name}</h1>
                    </NavLink>
                )
            })
        } else {
            return <h1>Content is missing :(</h1>
        }
    }

    render() {
        return (
            <div className="dogs-container dogs-container-home">
                <div className="dogs-wrapper">
                    {this.props.home ? 
                        <div className="heading">
                            <h2>Our Kotas Arrow Aussies</h2>
                        </div>
                        : null
                    }

                    <div className={this.props.home ? "dogs-home" : "dogs"}>
                        {this.renderDogs(this.props.dogs)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dogs;