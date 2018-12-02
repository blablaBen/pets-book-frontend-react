import React, {Component} from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';

export default class NewPost extends Component {
    render() {
        const {onClickSubmit} = this.props;

        return (
            <PostContainer>
                <div className="row">
                    <div className="col-3">
                        Avatar
                    </div>
                    <div className="col-9">
                        
                    </div>
                </div>
            </PostContainer>
        );
    }
} 

