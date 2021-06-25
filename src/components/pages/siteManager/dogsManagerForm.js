import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import DropzoneComponent from 'react-dropzone-component';

import '../../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../../node_modules/dropzone/dist/min/dropzone.min.css';

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
            imgProfileUrl: "",
            images: [],
            editMode: false,
            apiAction: "post",
            apiUrl: "http://localhost:5000/api/dogs/add"
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsProfileImgConfig = this.djsProfileImgConfig.bind(this);
        this.djsImagesListConfig = this.djsImagesListConfig.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentConfig() {
        return {
            iconFiletypes: ['.jpg', '.png'],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        }
    }

    djsProfileImgConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }

    djsImagesListConfig() {
        return {
            addRemoveLinks: true
        }
    }

    handleProfileImageDrop() {
        return {
            addedfile: file => this.setState({ imgProfileUrl: file }),
            removedfile: () => this.setState({ imgProfileUrl: "" })
        }
    }

    handleImagesDrops() {
        return {
            addedfile: file => this.setState({ images: [file].concat(this.state.images) }) 
        }
    }

    handleSubmit(event) {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: {
                name: this.state.name,
                breedingName: this.state.breedingName,
                gender: this.state.gender,
                dateOfBirth: this.state.dateOfBirth,
                dimensions: {
                    weight: this.state.weight,
                    height: this.state.height
                },
                color: this.state.color,
                imgProfileUrl: this.state.imgProfileUrl,
                images: this.state.images
            },
            headers: {
                'x-auth-token': this.props.token
            },
            withCredentials: true
        })
        .then(res => {
            if (this.state.editMode) {
                console.log("editing a dog")
            } else {
                console.log("Submitting a new dog")
            }

            this.setState({
                name: "",
                breedingName: "",
                gender: "",
                dateOfBirth: "",
                weight: "",
                height: "",
                color: "",
                imgProfileUrl: "",
                images: [],
                editMode: false,
                apiAction: "post",
                apiUrl: "http://localhost:5000/api/dogs/add"
            })
        })
        .catch(err => {
            console.log("Dog Mangager handle submit error:", err)
        })

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

                <div className="image-uploaders">
                    <div className="img-profile-url">
                        <DropzoneComponent 
                            config={this.componentConfig()}
                            djsConfig={this.djsProfileImgConfig()}
                            eventHandlers={this.handleProfileImageDrop()}
                        >
                            <div 
                                className="dz-message"
                                style={{ fontSize: "16px" }} 
                            >
                                    Profile Image
                            </div>
                        </DropzoneComponent>
                    </div>

                    <div className="image-urls-list">
                        <DropzoneComponent
                            config={this.componentConfig()}
                            djsConfig={this.djsImagesListConfig()}
                            eventHandlers={this.handleImagesDrops()}
                        >
                            <div 
                                className="dz-message"
                                style={{ fontSize: "16px" }} 
                            >
                                    Images
                            </div>
                        </DropzoneComponent>
                    </div>
                </div>

                <FormButton title="Save" /> 
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

DogsManagerForm = connect(mapStateToProps, null)(DogsManagerForm);

export default DogsManagerForm;