import React, {Component} from 'react';
import AvatarComponent from './AvatarComponent';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap'

const CommentStyle = {
    margin: "5px"
}

const AddCommentsButtonContainerStyle = {
    padding: "5px"
}

class AddNewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: ''
        };

        this.onAddCommentTextChange = this.onAddCommentTextChange.bind(this);
        this.onClickAddComment = this.onClickAddComment.bind(this);
    }

    onAddCommentTextChange(e) {
        this.setState({commentText: e.target.value});
    }

    onClickAddComment() {
        this.props.onClickAddComment(this.state.commentText);
        this.setState({commentText: ''});
    }

    render() {
        const {commentText} = this.state;
        const {currentUserPortraitUrl} = this.props;
        return (
            <div className="col">
                <div className="row">
                    <div className="col-2">
                            <AvatarComponent url={currentUserPortraitUrl}></AvatarComponent>
                    </div>
                    <div className="col-6">
                        <input className="col-12" style={CommentStyle} value={commentText} onChange={this.onAddCommentTextChange}></input>
                    </div>
                    <div className="col-3" style={AddCommentsButtonContainerStyle}>
                        <Button outline color="primary" size="sm" block onClick={this.onClickAddComment}>Add Comment</Button>
                    </div>
                </div>
            </div>
        )
    }
}

AddNewComponent.PropTypes = {
    onClickAddComment: PropTypes.func,
    currentUserPortraitUrl: PropTypes.string
};

export default AddNewComponent;