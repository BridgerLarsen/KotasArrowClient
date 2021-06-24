import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux';

import FormButton from '../../formButton';

class DogsManagerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            breedingName: "",
            gender: "",
            dateOfBirth: "",
            weight: "",
            height: "",
            color: "",
            imgProfileUrl: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log(event)

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="dogs-form-wrapper">
                <div className="two-column">
                    <input
                        className="dogs-form-name form-input"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />

                    <input
                        className="dogs-form-breeding-name form-input"
                        type="text"
                        name="breedingName"
                        placeholder="Breeding Name"
                        value={this.state.breedingName}
                        onChange={this.handleInputChange}
                    />
                </div>

                <div className="two-column">
                    <select
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleInputChange}
                        className="dogs-form-gender-select"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <input
                        className="dogs-form-date-of-birth form-input"
                        type="text"
                        name="dateOfBirth"
                        placeholder="Date Of Birth"
                        value={this.state.dateOfBirth}
                        onChange={this.handleInputChange}
                    />
                </div>

                <div className="two-column">
                    <input
                        className="dogs-form-weight form-input"
                        type="text"
                        name="weight"
                        placeholder="Weight"
                        value={this.state.weight}
                        onChange={this.handleInputChange}
                    />

                    <input
                        className="dogs-form-height form-input"
                        type="text"
                        name="height"
                        placeholder="Height"
                        value={this.state.height}
                        onChange={this.handleInputChange}
                    />
                </div>

                <div className="one-column">
                    <input
                        className="dogs-form-color form-input"
                        type="text"
                        name="color"
                        placeholder="Color"
                        value={this.state.color}
                        onChange={this.handleInputChange}
                    />
                </div>

                <FormButton title="Save" /> 
            </form>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         token: state.auth.token
//     }
// }

// ReviewsManagerForm = connect(mapStateToProps, null)(ReviewsManagerForm);

export default DogsManagerForm;