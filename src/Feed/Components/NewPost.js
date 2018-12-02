import React, {Component} from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';


const AvatarImgStyle = {
    borderRadius: '50%'
}

const AvatarComponent = ({url}) => {
    return (
        <div className="col">
            <img src={url} style={AvatarImgStyle}></img>
        </div>
    );
}

export default class NewPost extends Component {
    render() {
        const {onClickSubmit, portraitUrl} = this.props;

        return (
            <PostContainer>
                <div className="row">
                    <div className="col-3">
                        <AvatarComponent url={portraitUrl} ></AvatarComponent>
                    </div>
                    <div className="col-9">
                        
                    </div>
                </div>
            </PostContainer>
        );
    }
} 

