import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Dogs extends Component {
    constructor(props) {
        super(props);
    }

    renderDogs(dogs, page) {
        return dogs.map(dog => {
            if (page && `${dog.gender.toLowerCase()}s` === page) {
                return (
                    <NavLink 
                        to={`/our-aussies/${dog.gender.toLowerCase()}s/${dog.name.toLowerCase()}`} 
                        className="dog" 
                        key={dog._id}
                    >
                        <img src={dog.imgProfileUrl} />
    
                        <h1 className="dog-name">{dog.name}</h1>
                    </NavLink>
                )
            } else if (!page) {
                return (
                    <NavLink 
                        to={`/our-aussies/${dog.gender.toLowerCase()}s/${dog.name.toLowerCase()}`} 
                        className="dog" 
                        key={dog._id}
                    >
                        <img src={dog.imgProfileUrl} />
    
                        <h1 className="dog-name">{dog.name}</h1>
                    </NavLink>
                )
            }
        })
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
                        {this.props.dogs ? 
                            this.renderDogs(this.props.dogs, this.props.page)
                            : <h1>Content is missing :(</h1>   
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogs.dogs
    }
}

Dogs = connect(mapStateToProps, null)(Dogs);

export default Dogs;