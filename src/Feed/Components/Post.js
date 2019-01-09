import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap'
import PostContainer from './PostContainer';
import { HOST } from '../../Const/URLConstant';
import AvatarComponent from './AvatarComponent';
import axios from 'axios';
import Comment from './Comment';

const PostContent = styled.div.attrs({
    className: "col-12"
})`
    border-bottom: 1px solid #ccc9c9;
    padding: 15px;
`

const ImgStyle = {
    width: "inherit",
    marginTop: "15px"
}
const ImgComponent = ({ url }) => {
    return (
        <div className="col">
            <img src={url} style={ImgStyle}></img>
        </div>
    );
}

const ShowCommentsButtonContainerStyle = {
    padding: "5px",
    padding: "5px",
    textAlign: "center",
    textDecoration: "underline",
    color: "#c54057",
    fontSize: "0.8rem",
    cursor: "pointer"
}


const AddCommentsButtonContainerStyle = {
    padding: "5px"
}

const CommentStyle = {
    margin: "5px"
}

const AvatarContainerStyle = {
    padding: "5px",
    textAlign: "center"
}

const ProfileNameStyle = {
    lineHeight: "50px"
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portraitUrl: "",
            profileName: "",
            commentText: "",
            isShowingComment: false,
            comments: []
        }
    }

    fetchUserData(userId, jwt) {
        return axios.get(`${HOST}/user/${userId}`,
            { headers: { Authorization: jwt } });
    }

    onAddCommentTextChange(newText) {
        this.setState({ commentText: newText });
    }

    onClickAddComment() {
        const { id } = this.props.item;
        const { currentUserId, jwt } = this.props;
        const { commentText } = this.state;
        this.addComment(currentUserId, id, commentText, jwt).then(() => {
            this.setState({ commentText: "" });
            this.onClickShowComments();
        }, (error) => {
            alert(`Error: ${error.response.data.errorMessage}`);
        });
    }

    addComment(userId, postId, commentText, jwt) {
        const commentObj = {
            "userId": userId,
            "content": commentText
        };

        return axios.post(
            `${HOST}/newFeeds/${postId}/comments`, commentObj, { headers: { Authorization: jwt } }
        );
    }

    onClickShowComments() {
        const { id } = this.props.item;
        const { jwt } = this.props;
        this.fetchComments(id, jwt).then((response) => {
            this.setState({ comments: response.data.data, isShowingComment: true });
        }, (error) => {
            alert(`Error: ${error.response.data.errorMessage}`);
        })
    }

    fetchComments(postId, jwt) {
        return axios.get(`${HOST}/newFeeds/${postId}/comments`,
            { headers: { Authorization: jwt } });
    }

    render() {
        const { currentUserPortraitUrl, jwt } = this.props;
        const { userId, textValue, pictures, commentCount } = this.props.item;
        const { portraitUrl, profileName, isShowingComment, comments, commentText } = this.state;

        if (portraitUrl == "") {
            const { userId } = this.props.item;
            const { jwt } = this.props;
            this.fetchUserData(userId, jwt).then((response) => {
                if (response.data.data != null) {
                    this.setState({ portraitUrl: response.data.data.portraitUrl });
                    this.setState({ profileName: response.data.data.profileName });
                }
            });
        }

        return (
            <PostContainer>
                <div className="row">
                    <div className="col-2" style={AvatarContainerStyle}>
                        <AvatarComponent url={portraitUrl}></AvatarComponent>
                    </div>
                    <div className="col-10" style={ProfileNameStyle}>
                        {profileName}
                    </div>
                </div>
                <div className="row">
                    <PostContent>
                        {textValue}
                    </PostContent>
                </div>
                <div className="row">
                    {pictures && pictures.length > 0 && pictures.map((url, index) => {
                        return <ImgComponent url={url} key={index}></ImgComponent>;
                    })
                    }
                </div>
                <div className="row">
                    {!isShowingComment &&
                        <div className="col" style={ShowCommentsButtonContainerStyle} onClick={
                            (e) => {
                                this.onClickShowComments();
                            }
                        }>
                            Show {commentCount} Comments
                    </div>
                    }
                    {isShowingComment &&
                        comments.map((comment, index) => {
                            return <Comment key={index} jwt={jwt} id={comment.id} content={comment.content} time={comment.time} userId={comment.userId}></Comment>
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-2">
                        <AvatarComponent url={currentUserPortraitUrl}></AvatarComponent>
                    </div>
                    <div className="col-6">
                        <input className="col-12" style={CommentStyle} value={commentText} onChange={(e) => {
                            this.onAddCommentTextChange(e.target.value);
                        }}></input>
                    </div>
                    <div className="col-3" style={AddCommentsButtonContainerStyle}>
                        <Button outline color="primary" size="sm" block onClick={
                            (e) => {
                                this.onClickAddComment();
                            }
                        }>Add Comment</Button>
                    </div>
                </div>
            </PostContainer>
        );
    }
}

Post.propTypes = {
    jwt: PropTypes.string.isRequired,
    currentUserPortraitUrl: PropTypes.string.isRequired,
    currentUserId: PropTypes.string.isRequired,
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        textValue: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
        commentCount: PropTypes.number.isRequired
    })
}

export default Post