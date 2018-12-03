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

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentWillMount() {
        this.updateFeed();
    }

    updateFeed() {
        const { jwt } = this.props;
        axios.get(
            `${HOST}/newFeeds?pageSize=1000&page=0`, { headers: { Authorization: jwt } }
        ).then((response) => {
            this.setState({ posts: response.data.data });
        }, (error) => {
            alert(`Error: ${error.response.data.errorMessage}`);
        });
    }

    onClickPost = (content) => {
        const { jwt, userId } = this.props;
        const newStatus = {
            "userId": userId,
            "textValue": content,
            "pictures": []
        }

        axios.post(
            `${HOST}/newFeeds/`, newStatus, { headers: { Authorization: jwt } }
        ).then((response) => {
            this.updateFeed();
        }, (error) => {
            alert(`Error: ${error.response.data.errorMessage}`);
        });
    }

    render() {
        const { posts } = this.state;
        const { portraitUrl, jwt, userId } = this.props;
        return (
            <FeedContainer>
                <div className="col-8">
                    <NewPost portraitUrl={portraitUrl} onClickPost={this.onClickPost}></NewPost>
                </div>
                <div className="col-8">
                    {
                        posts.map((post, index) => {
                            return <Post key={index} item={post} jwt={jwt} currentUserId={userId} currentUserPortraitUrl={portraitUrl} />
                        })
                    }
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