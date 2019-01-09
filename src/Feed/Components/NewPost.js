import React, { Component } from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';
import { Button } from 'reactstrap';
import AvatarComponent from './AvatarComponent';
import PropTypes from 'prop-types';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PostTextAreaStyle = {
    border: '0px solid rgb(224, 220, 220)'
}

const UpperContainer = styled.div.attrs({
    className: "col-12"
})`
    border-bottom: 1px solid #dedede;
    margin-bottom: 15px;
    padding-bottom: 15px;
`;

class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textArea : "",
            modal: false,
            pictureUrls: ["", "", ""]
        };
        
        this.toggle = this.toggle.bind(this);
    }

    onTextAreaChanged = (value) => {
        this.setState({textArea : value});
    };

    onPost = () => {
        const {textArea, pictureUrls} = this.state;
        const {onClickPost} = this.props;
        let validPictureUrls = pictureUrls.filter((value) => value !== "");
        onClickPost(textArea, validPictureUrls);
        this.setState({textArea: "", pictureUrls: ["", "", ""]});
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

    onUrlChange(id, value) {
        const {pictureUrls} = this.state;
        pictureUrls[id] = value;
        this.setState({pictureUrls: pictureUrls});
    }

    render() {
        const { portraitUrl } = this.props;
        const {textArea} = this.state;
        const url0 = this.state.pictureUrls[0];
        const url1 = this.state.pictureUrls[1];
        const url2 = this.state.pictureUrls[2];

        return (
            <PostContainer>
                <div className="row">
                    <UpperContainer>
                        <div className="row">
                            <div className="col-2">
                                <AvatarComponent url={portraitUrl} ></AvatarComponent>
                            </div>
                            <div className="col-8">
                                <textarea className="col-12" value={textArea} style={PostTextAreaStyle} placeholder="What's on your mind?" onChange={
                                    e => {
                                        this.onTextAreaChanged(e.target.value)
                                    }
                                }></textarea>
                            </div>
                            <div className="2">
                                <Button outline color="primary" size="sm"  onClick={
                                    e => {
                                        this.toggle()
                                    }}>Pic</Button>{' '}
                            </div>
                        </div>
                    </UpperContainer>
                </div>
                <div className="row">
                        <div className="col-10"></div>
                        <div className="col-2">
                            <Button  color="primary" block onClick={
                                e => {
                                    this.onPost()
                                }}>Post</Button>{' '}
                        </div> 
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Picture URL</ModalHeader>
                    <ModalBody>
                        <div className="row">
                            <div className="col-12">
                                <input value={url0} placeholder="Image URL here" onChange={(e)=>{
                                    this.onUrlChange(0, e.target.value);  
                                }}></input>
                            </div>
                            <div className="col-12">
                                <input value={url1} placeholder="Image URL here" onChange={(e)=>{
                                    this.onUrlChange(1, e.target.value);  
                                }}></input>
                            </div>
                            <div className="col-12">
                                <input value={url2} placeholder="Image URL here" onChange={(e)=>{
                                    this.onUrlChange(2, e.target.value);  
                                }}></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </PostContainer>
        );
    }
}


NewPost.PropTypes = {
    portraitUrl: PropTypes.string.isRequired,
    onClickPost: PropTypes.func.isRequired
}

export default NewPost;