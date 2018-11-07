import React, { Component } from "react";
import "./Feed.css";
import styled from 'styled-components';
import Post from './Components/Post';

const FeedContainer = styled.div.attrs({
    className: "row justify-content-center"
})`

`;

export default class Feed extends Component {
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
    }

    render() {
        const {postItems} = this.state;
        return (
            <FeedContainer>
                <div className="col-8">
                    {
                        postItems.map((post, index) => {
                          return <Post key={index} item={post} /> 
                        })
                    }
                </div>
            </FeedContainer>
        );
    }
}