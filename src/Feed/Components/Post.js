import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap'

const PostContainer = styled.div.attrs({
    className: "col-12"
})`
    border: 1px solid #ccc9c9;
    border-radius: 5px;
    background-color: white;
    padding:15px;
    margin-bottom: 10px;
`;

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
    }

    render() {
        const {userId, textValue, pictures, commentCount} = this.props.item;

        return (
            <PostContainer>
                <div className="row">
                    <div className="col-3">
                        Avartar
                    </div>
                    <div className="col-9">
                        {userId}
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
    item: PropTypes.shape({
        userId: PropTypes.string.isRequired,
        textValue: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
        commentCount: PropTypes.number.isRequired
    })
}

export default Post