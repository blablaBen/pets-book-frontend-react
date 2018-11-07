import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostContainer = styled.div.attrs({
    className: "col-12"
})`
    border: 1px solid #ccc9c9;
    border-radius: 2px;
    background-color: white;
    padding:15px;
`;

const PostContent = styled.div.attrs({
    className: "col-12"
})`
    border-bottom: 1px solid #ccc9c9;
`

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {userId, textValue, pictures} = this.props.item;

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
                {pictures.length > 0 && pictures.map((url) => {
                    return url;
                })
                }
            </PostContainer>
        );
    }
}

Post.propTypes = {
    item: PropTypes.shape({
        userId: PropTypes.string.isRequired,
        textValue: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default Post