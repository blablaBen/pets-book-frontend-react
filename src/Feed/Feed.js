import React, { Component } from "react";
import "./Feed.css";
import styled from 'styled-components';
import Post from './Components/Post';
import { connect } from 'react-redux';
import NewPost from './Components/NewPost';
import axios from "axios";
import { HOST } from '../Const/URLConstant';

const FeedContainer = styled.div.attrs({
    className: "row justify-content-center"
})`

`;

const ShowMorePostButtonContainerStyle = {
    textAlign: "center",
    textDecoration: "underline",
    color: "#c54057",
    cursor: "pointer"
}

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            pageSize: 100,
            page: 0
        };
    }

    componentWillMount() {
        const {pageSize, page} = this.state;
        this.updateFeed(pageSize, page);
    }

    showMoreFeed() {
        let pageSize = this.state.pageSize;
        let newPage = this.state.page + pageSize;
        this.updateFeed(pageSize, newPage);
    }

    updateFeed(pageSize, newPage) {
        const { jwt } = this.props;
        axios.get(
            `${HOST}/newFeeds?pageSize=${pageSize}&page=${newPage}`, { headers: { Authorization: jwt } }
        ).then((response) => {
            let postItems = this.state.posts;
            postItems = postItems.concat(response.data.data);
            this.setState({ posts: postItems, pageSize: pageSize, page:newPage});
        }, (error) => {
            alert(`Error: ${error.response.data.errorMessage}`);
        });
    }

    onClickPost = (content, pictureUrls) => {
        const { jwt, userId } = this.props;
        const newStatus = {
            "userId": userId,
            "textValue": content,
            "pictures": pictureUrls
        }

        axios.post(
            `${HOST}/newFeeds/`, newStatus, { headers: { Authorization: jwt } }
        ).then((response) => {
            this.resetFeed();
        }, (error) => {
            alert(`Error: ${error.response.data.errorMessage}`);
        });
    }

    resetFeed() {
        let pageSize = 10;
        let newPage = 0;
        this.setState({posts: []});
        this.updateFeed(pageSize, newPage);
        this.setState({pageSize: pageSize, page:newPage});
    }

    render() {
        const { posts } = this.state;
        const { portraitUrl, jwt, userId } = this.props;
        return (
            <FeedContainer>
                <div className="col-12 col-md-8">
                    <NewPost portraitUrl={portraitUrl} onClickPost={this.onClickPost}></NewPost>
                </div>
                <div className="col-12 col-md-8">
                    {
                        posts.map((post, index) => {
                            return <Post key={index} item={post} jwt={jwt} currentUserId={userId} currentUserPortraitUrl={portraitUrl} />
                        })
                    }
                </div>
                <div className="col-12" style={ShowMorePostButtonContainerStyle} onClick={(e) => {
                    this.showMoreFeed();
                }}>
                    Display More Items
                </div>
            </FeedContainer>
        );
    }
}

const mapStateToProps = state => ({
    jwt: state.user.jwt,
    userId: state.user.userId,
    portraitUrl: state.user.fulfilledUserData.portraitUrl
});

const mapActionToProps = dispatch => ({

});

export default connect(mapStateToProps, mapActionToProps)(Feed);