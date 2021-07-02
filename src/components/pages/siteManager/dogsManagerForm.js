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
            gender: "Male",
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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsProfileImgConfig = this.djsProfileImgConfig.bind(this);
        this.djsImagesListConfig = this.djsImagesListConfig.bind(this);
        this.buildForm = this.buildForm.bind(this);

        this.imgProfileUrlRef = React.createRef();
        this.imagesRef = React.createRef();
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentConfig() {
        return {
            iconFiletypes: ['.jpg', '.png', 'jpeg'],
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
            addedfile: file => this.setState({ images: [file].concat(this.state.images) }),
            removedfile: file => {
                var imagesArray = this.state.images;
                const index = imagesArray.indexOf(file);
                if (index > -1) {
                    imagesArray.splice(index, 1);
                    this.setState({
                        images: imagesArray
                    })
                }
            } 
        }
    }


    buildForm() {
        let formData = new FormData();  // formData object

        formData.append("name", this.state.name);
        formData.append("breedingName", this.state.breedingName);
        formData.append("gender", this.state.gender);
        formData.append("dateOfBirth", this.state.dateOfBirth);
        formData.append("dimensions[weight]", this.state.weight);
        formData.append("dimensions[height]", this.state.height);
        formData.append("color", this.state.color);
        
        if (this.state.imgProfileUrl) {
            formData.append("imgProfileUrl", this.state.imgProfileUrl);
        }

        if (this.state.images.length > 0) {
            this.state.images.map((img, index) => {
                formData.append(`images`, img)
            })
        }

        return formData;

    }

    handleSubmit(event) {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),    
            headers: {
                'x-auth-token': this.props.token,
                'content-type': 'multipart/form-data'
            },
            withCredentials: true
        })
        .then(res => {
            if (this.state.editMode) {
                console.log("editing a dog")
            } else {
                this.props.handleNewFormSubmission(res.data);
            }

            this.setState({
                name: "",
                breedingName: "",
                gender: "Male",
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

            this.imgProfileUrlRef.current.dropzone.removeAllFiles();
            this.imagesRef.current.dropzone.removeAllFiles();

            // [this.imgProfileUrlRef, this.imagesRef].forEach(ref => {
            //     ref.current.dropzone.removeAllFiles();
            // })
        })
        .catch(err => {
            console.log("Dog Mangager handle submit error:", err.response.data)
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
                            ref={this.imgProfileUrlRef}
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
                            ref={this.imagesRef}
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