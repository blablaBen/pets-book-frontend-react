import React, { Component } from "react";
import "./Feed.css";
import styled from 'styled-components';
import Post from './Components/Post';
import {connect} from 'react-redux';
import {updateFeed} from './action';

const FeedContainer = styled.div.attrs({
    className: "row justify-content-center"
})`

`;

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postItems: []
        };
    }

    componentWillMount() {
        this.setState({postItems: [{
            "commentCount": 0,
            "date": "2018-11-06 12:54AM",
            "id": "5be156cd964ac4092a64f6db",
            "pictures": [
                "https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg"
            ],
            "textValue": "Hi!, this is my first status",
            "userId": "5bde471d69c4f1059d4f5365"
        }]})
        this.props.loadFeed();
    }

    render() {
        const {posts} = this.props;
        console.log(posts);
        return (
            <FeedContainer>
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
    posts: state.feed.posts
});

const mapActionToProps = dispatch => ({
    loadFeed: () => dispatch(updateFeed())
});

export default connect(mapStateToProps, mapActionToProps)(Feed);