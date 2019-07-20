import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ImageUpload extends Component {
    state = {
        isUploading: false,
        progress: 0,
        imageURL: "",
        initImage: false
    };
    componentDidMount() {
        console.log('firebase.apps: ', firebase.apps)
        if (firebase.apps.length) {
            this.setState({
                initImage: true,
                firebase: firebase
            });
        } else {
            this.setState({
                initImage: true,
                firebase: firebase.initializeApp({
                    apiKey: this.props.firebaseKey,
                    storageBucket: this.props.storageBucket
                }),
            });
            this.props.handleInit(true);
        }
    }
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        console.log('filename: ', filename)
        this.setState({ progress: 100, isUploading: false });
        this.state.firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({ imageUrl: url });
                this.props.handleImageUrl(url);
            });
        
    };

    render() {
        return ( 
            <div>
                {this.state.initImage && <form>
                    {this.state.isUploading && <p> Uploading: {this.state.progress}% </p>}
                    <FileUploader accept = "image/*"
                        name = "image"
                        randomizeFilename storageRef = { this.state.firebase.storage().ref("images") }
                        onUploadStart = { this.handleUploadStart }
                        onUploadError = { this.handleUploadError }
                        onUploadSuccess = { this.handleUploadSuccess }
                        onProgress = { this.handleProgress }
                    /> 
                </form>}
            </div>
        );
    }
}

export default ImageUpload;
