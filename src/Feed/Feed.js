import React, { Component } from "react";
import "./Feed.css";
import styled from 'styled-components';
import Post from './Components/Post';
import {connect} from 'react-redux';
import NewPost from './Components/NewPost';
import axios from "axios";
import {HOST} from '../Const/URLConstant';

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
        const {jwt} = this.props;
        axios.get(
            `${HOST}/newFeeds?pageSize=10&page=1`, { headers: { Authorization: jwt } }
          ).then((response) => {
            this.setState({posts:response.data.data});
          });
    }

    render() {
        const {posts} = this.state;
        const {portraitUrl} = this.props;
        return (
            <FeedContainer>
                <div className="col-8">
                    <NewPost portraitUrl={portraitUrl}></NewPost>
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
    jwt: state.user.jwt,
    portraitUrl: state.user.fulfilledUserData.portraitUrl
});

const mapActionToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapActionToProps)(Feed);