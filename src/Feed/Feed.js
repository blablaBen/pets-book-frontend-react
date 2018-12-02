import React, { Component } from "react";
import "./Feed.css";
import styled from 'styled-components';
import Post from './Components/Post';
import {connect} from 'react-redux';
import {updateFeed} from './action';
import NewPost from './Components/NewPost';

const FeedContainer = styled.div.attrs({
    className: "row justify-content-center"
})`

`;

class Feed extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {jwt} = this.props;
        this.props.loadFeed(jwt);
    }

    render() {
        const {posts} = this.props;
        return (
            <FeedContainer>
                <div className="col-8">
                    <NewPost></NewPost>
                </div>
                <div className="col-8">
                    {
                        posts.map((post, index) => {
                          return <Post key={index} item={post} /> 
                        })
                    }
                </div>
            </FeedContainer>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.feed.posts,
    jwt: state.user.jwt
});

const mapActionToProps = dispatch => ({
    loadFeed: (jwt) => dispatch(updateFeed(jwt))
});

export default connect(mapStateToProps, mapActionToProps)(Feed);