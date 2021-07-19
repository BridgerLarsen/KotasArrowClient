import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';

class Dogs extends Component {
    componentDidMount() {
        axios.get('/api/dogs')
            .then(response => { 
                this.props.setDogsInfo(response.data.dogs)
            })
            .catch(err => {
                console.log(err);
            })
      }

    renderDogs(dogs, page) {
        return dogs.map(dog => {
            if (page && `${dog.gender.toLowerCase()}s` === page) {
                return (
                    <Link 
                        to={`/our-aussies/${dog.gender.toLowerCase()}s/${dog.name.toLowerCase()}`} 
                        className="dog" 
                        key={dog._id}
                    >
                        <img alt={dog.name} src={dog.imgProfileUrl} />
    
                        <h1 className="dog-name">{dog.name}</h1>
                    </Link>
                )
            } else if (!page) {
                return (
                    <Link 
                        to={`/our-aussies/${dog.gender.toLowerCase()}s/${dog.name.toLowerCase()}`} 
                        className="dog" 
                        key={dog._id}
                    >
                        <img alt={dog.name} src={dog.imgProfileUrl} />
    
                        <h1 className="dog-name">{dog.name}</h1>
                    </Link>
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
                            <h2>Our Aussies</h2>
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

Dogs = connect(mapStateToProps, actions)(Dogs);

export default Dogs;