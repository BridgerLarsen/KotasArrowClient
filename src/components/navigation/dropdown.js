import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

function DogDropDown(props) {
    const dogs = props.dogs.map((dogs, index) => {
        if (dogs.gender.toLowerCase() === props.gender) {
            return (
                <Link key={index} to={`/our-aussies/${dogs.gender.toLowerCase()}s/${dogs.name.toLowerCase()}`}>
                    {dogs.name}
                </Link>
            )
        }
    })

    return (
        <div className={`${props.gender}-drop-down-wrapper`}>
            {dogs}
        </div>
    )
}

class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maleDropdown: false,
            femaleDropdown: false
        }

        this.maleMouseEnter = this.maleMouseEnter.bind(this);
        this.maleMouseLeave = this.maleMouseLeave.bind(this);
        this.femaleMouseEnter = this.femaleMouseEnter.bind(this);
        this.femaleMouseLeave = this.femaleMouseLeave.bind(this);
    }

    maleMouseEnter() {
        this.setState({
            maleDropdown: true
        })
    }

    maleMouseLeave() {
        this.setState({
            maleDropdown: false
        })
    }

    femaleMouseEnter() {
        this.setState({
            femaleDropdown: true
        })
    }

    femaleMouseLeave() {
        this.setState({
            femaleDropdown: false
        })
    }

    render() {
        return (
            <div className="drop-down-wrapper">
                <div 
                    className="link-wrapper"
                    onMouseEnter={this.maleMouseEnter}
                    onMouseLeave={this.maleMouseLeave}
                >
                    <Link to="/our-aussies/males">
                        Males <FontAwesomeIcon icon="caret-right" />
                    </Link>

                    {this.state.maleDropdown ? 
                        <DogDropDown dogs={this.props.dogs} gender="male" />
                        : null
                    }
                </div>
                
                <div 
                    className="link-wrapper"
                    onMouseEnter={this.femaleMouseEnter}
                    onMouseLeave={this.femaleMouseLeave}
                >
                    <Link to="/our-aussies/females">
                        Females <FontAwesomeIcon icon="caret-right" />
                    </Link>

                    {this.state.femaleDropdown ? 
                        <DogDropDown dogs={this.props.dogs} gender="female" />
                        : null
                    }
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

DropDown = connect(mapStateToProps, null)(DropDown);

export default DropDown;