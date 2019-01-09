import React, { Component } from "react";
import axios from 'axios';
import AvatarComponent from './AvatarComponent';
import PropTypes from 'prop-types';
import { HOST } from '../../Const/URLConstant';
import styled from 'styled-components';

const ComponentStyle = {
    margin: "10px"
}

const ProfileNameStyle = {
    color: "#940909"
}

const CommentAlignCenter = styled.div`
    line-height: 50px;
`;

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            profileName: "",
            portraitUrl: ""
        }
    }

    componentWillMount() {
        this.loadUserProfile();
    }

    loadUserProfile() {
        const { userId, jwt } = this.props;
        this.fetchUserData(userId, jwt).then((response) => {
            if (response.data.data != null) {
                const { profileName, portraitUrl } = response.data.data;
                this.setState({ isLoaded: true, profileName: profileName, portraitUrl: portraitUrl });
            }
        }, (reason) => {
            alert(`Error: ${reason.errorMessage}`);
        });
    }

    fetchUserData(userId, jwt) {
        return axios.get(`${HOST}/user/${userId}`,
            { headers: { Authorization: jwt } });
    }

    render() {
        const { isLoaded, portraitUrl, profileName } = this.state;
        const { content } = this.props;

        return (
            isLoaded &&
            <div className="col-12" style={ComponentStyle}>
                <div className="row">
                    <div className="col-2">
                        <AvatarComponent url={portraitUrl}></AvatarComponent>
                    </div>
                    <div className="col-10">
                      <CommentAlignCenter>
                        <span style={ProfileNameStyle}>{profileName}:</span> {content} 
                       </CommentAlignCenter>
                    </div>
                </div>
            </div>
        );
    }
}

Comment.propTypes = {
    jwt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired
}

export default Comment;