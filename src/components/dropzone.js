import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';

class Dropzone extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <DropzoneComponent 
                ref={this.props.title === "Profile Image" ? 
                    this.props.imgProfileUrlRef
                    : this.props.imagesRef}
                config={this.componentConfig()}
                djsConfig={this.props.title === "Profile Image" ?
                    this.djsProfileImgConfig()
                    : this.djsImagesListConfig()}
                eventHandlers={this.props.title === "Profile Image" ? 
                    this.props.handleProfileImageDrop() 
                    : this.props.handleImagesDrops()}
            >
                <div 
                    className="dz-message"
                    style={{ fontSize: "16px" }} 
                >
                        {this.props.title}
                </div>
            </DropzoneComponent>
        )
    }
}

export default Dropzone;