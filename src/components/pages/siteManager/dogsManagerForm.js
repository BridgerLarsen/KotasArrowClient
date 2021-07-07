import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../../../node_modules/react-dropzone-component/styles/filepicker.css';
import '../../../../node_modules/dropzone/dist/min/dropzone.min.css';

import FormButton from '../../formButton';
import Dropzone from '../../dropzone';

class DogsManagerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: "",
            name: "",
            breedingName: "",
            gender: "Male",
            dateOfBirth: "",
            weight: "",
            height: "",
            color: "",
            imgProfileUrl: "",
            images: [],
            existingImages: [],
            editMode: false,
            apiAction: "post",
            apiUrl: "http://localhost:5000/api/dogs/add",
            addDropzoneImages: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleProfileImageDrop = this.handleProfileImageDrop.bind(this);
        this.handleImagesDrops = this.handleImagesDrops.bind(this);
        this.buildForm = this.buildForm.bind(this);
        this.toggleAddDropzoneImages = this.toggleAddDropzoneImages.bind(this);

        this.imgProfileUrlRef = React.createRef();
        this.imagesRef = React.createRef();
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
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

    deleteImage(imageType, image) { 
        if (imageType === "imgProfileUrl") {
            axios.delete(
                `http://localhost:5000/api/dogs/deleteAnImage/${this.state._id}?imgProfileUrl=${this.state.imgProfileUrl}`, 
                { headers: {
                        'x-auth-token': this.props.token
                    }
                },
                { withCredentials: true }
            )
            .then(res => {
                this.setState({
                    imgProfileUrl: ""
                })
            })
            .catch(err => {
                console.log("Delete Image Error", err);
            })
        } else if (imageType === "images") {
            axios.delete(
                `http://localhost:5000/api/dogs/deleteAnImage/${this.state._id}?image=${image.src}`, 
                { headers: {
                        'x-auth-token': this.props.token
                    }
                },
                { withCredentials: true }
            )
            .then(res => {
                this.setState({
                    existingImages: this.state.existingImages.filter(img => {
                        if (img._id !== image._id) {
                            return img
                        }
                    })
                })
            })
            .catch(err => {
                console.log("Delete Image", err);
            })
        }
    }

    toggleAddDropzoneImages() {
        if (!this.state.addDropzoneImages) {
            this.setState({
                addDropzoneImages: true
            })
        } else if (this.state.addDropzoneImages) {
            this.setState({
                addDropzoneImages: false
            })
        }
    }

    componentDidUpdate() {
        if (Object.keys(this.props.dogToEdit).length > 0) {
            const {
                _id,
                name,
                breedingName,
                gender,
                dateOfBirth,
                dimensions,
                color,
                imgProfileUrl,
                images
            } = this.props.dogToEdit

            const {
                weight,
                height
            } = dimensions;

            this.props.clearDogToEdit();

            this.setState({
                _id: _id || "",
                name: name || "",
                breedingName: breedingName || "",
                gender: gender || "Male",
                dateOfBirth: dateOfBirth || "",
                weight: weight || "",
                height: height || "",
                color: color || "",
                imgProfileUrl: imgProfileUrl || "",
                existingImages: images || [],
                editMode: true,
                apiAction: "patch",
                apiUrl: `http://localhost:5000/api/dogs/update/${_id}`
            })
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
            this.state.images.map(img => {
                formData.append('images', img)
            })
        }

        if (this.state.existingImages.length > 0) {
            this.state.existingImages.map(img => {
                formData.append('existingImages', img.src)
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
                this.props.handleEditFormSubmission(); 
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
                        {this.state.imgProfileUrl.length > 0 && this.state.editMode ? (
                            <div className="edit-image-wrapper">
                                <img src={this.state.imgProfileUrl} alt="ImgProfileUrl" />

                                <div className="image-removal-link">
                                    <div onClick={() => this.deleteImage("imgProfileUrl")}>
                                        <FontAwesomeIcon icon="ban" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Dropzone 
                                imgProfileUrlRef={this.imgProfileUrlRef}
                                title="Profile Image"
                                handleProfileImageDrop={this.handleProfileImageDrop}
                            />
                        )
                        }
                    </div>

                    <div className={this.state.editMode ? "edit-image-urls-list" : "image-urls-list"}>
                        {this.state.existingImages && this.state.editMode ? (
                            <div className="edit-images-container">
                                <div className="edit-images">
                                    {this.state.existingImages.map(img => {
                                        return img._id ? (
                                            <div key={img._id} className="edit-image-wrapper">
                                                <img src={img.src} alt="Dog" />

                                                <div className="image-removal-link">
                                                    <div onClick={() => this.deleteImage("images", img)}>
                                                        <FontAwesomeIcon icon="ban" />
                                                    </div>
                                                </div>
                                            </div>  
                                        ) : null
                                    })}
                                </div>

                                {this.state.addDropzoneImages ? (
                                    <Dropzone 
                                        imagesRef={this.imagesRef}
                                        title="Images"
                                        handleImagesDrops={this.handleImagesDrops}
                                    />
                                ) : (
                                    <button className="add-images-btn" onClick={() => this.toggleAddDropzoneImages()}>
                                        Add images
                                    </button>
                                )}
                            </div>
                        ) : (
                            <Dropzone 
                                imagesRef={this.imagesRef}
                                title="Images"
                                handleImagesDrops={this.handleImagesDrops}
                            />
                        )}
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