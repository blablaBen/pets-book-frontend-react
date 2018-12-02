import React, { Component } from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';


const AvatarImgStyle = {
    borderRadius: '50%',
    width: '70%'
}

const AvatarComponent = ({ url }) => {
    return (
        <div className="col">
            <img src={url} style={AvatarImgStyle}></img>
        </div>
    );
}

const PostTextArea = styled.textarea.attrs({
    className: "col-12"
})`
    border: 1px solid rgb(224, 220, 220);
`

const PostTextAreaStyle = {
    border: '0px solid rgb(224, 220, 220)'
}

export default class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textArea : ""
        };
    }

    onTextAreaChanged = (value) => {
        this.setState({textarea : value});
    };

    render() {
        const { onClickSubmit, portraitUrl } = this.props;
        const {textarea} = this.state;
        return (
            <PostContainer>
                <div className="row">
                    <div className="col-2">
                        <AvatarComponent url={portraitUrl} ></AvatarComponent>
                    </div>
                    <div className="col-8">
                        <textArea className="col-12" style={PostTextAreaStyle} placeholder="What's on your mind?" onChange={
                            e => {
                                this.onTextAreaChanged(e.target.value)
                            }
                        }></textArea>
                    </div>
                </div>
            </PostContainer>
        );
    }
}

