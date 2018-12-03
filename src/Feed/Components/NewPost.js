import React, { Component } from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';
import { Button } from 'reactstrap';
import AvatarComponent from './AvatarComponent';

const PostTextArea = styled.textarea.attrs({
    className: "col-12"
})`
    border: 1px solid rgb(224, 220, 220);
`

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

export default class NewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textArea : ""
        };
      
    }

    onTextAreaChanged = (value) => {
        this.setState({textArea : value});
    };

    onPost = () => {
        const {textArea} = this.state;
        const {onClickPost} = this.props;
        onClickPost(textArea);
    }

    render() {
        const { onClickSubmit, portraitUrl } = this.props;
        const {textarea} = this.state;
        return (
            <PostContainer>
                <div className="row">
                    <UpperContainer>
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
            </PostContainer>
        );
    }
}

