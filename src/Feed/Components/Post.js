import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap'
import PostContainer from './PostContainer';
import {HOST} from '../../Const/URLConstant';
import AvatarComponent from './AvatarComponent';
import axios from 'axios';

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
const ImgComponent = ({url}) => {
    return (
        <div className="col">
            <img src={url} style={ImgStyle}></img>
        </div>
    );
}

const ButtonContainerStyle =  {
    padding: "15px"
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portraitUrl : "",
            profileName : ""
        }
    }

    fetchUserData(userId, jwt) {
        return axios.get(`${HOST}/user/${userId}`,
         { headers: { Authorization: jwt } });
    }

    render() {
        const {userId, textValue, pictures, commentCount} = this.props.item;
        const {portraitUrl, profileName} = this.state;
        
        if(portraitUrl == "") {
            const {userId} = this.props.item;
            const {jwt} = this.props;
            this.fetchUserData(userId, jwt).then((response) => {
                if(response.data.data != null){
                    this.setState({portraitUrl: response.data.data.portraitUrl});
                    this.setState({profileName: response.data.data.profileName});  
                }
            });
        }

        return (
            <PostContainer>
                <div className="row">
                    <div className="col-2">
                        <AvatarComponent url={portraitUrl}></AvatarComponent>
                    </div>
                    <div className="col-10">
                        {profileName}
                    </div>
                </div>
                <div className="row">
                    <PostContent>
                        {textValue}
                    </PostContent>
                </div>
                <div className="row">
                    {pictures.length > 0 && pictures.map((url, index) => {
                        return <ImgComponent url={url} key={index}></ImgComponent>;
                    })
                    }
                </div>
                <div className="row">
                    <div className="col" style={ButtonContainerStyle}>
                        <Button color="primary" size="sm" block>Show {commentCount} Comments</Button>
                    </div>
                </div>
            </PostContainer>
        );
    }
}

Post.propTypes = {
    jwt: PropTypes.string.isRequired,
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        textValue: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
        commentCount: PropTypes.number.isRequired
    })
}

export default Post