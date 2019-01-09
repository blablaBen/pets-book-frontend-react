import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ChatRoomItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>Item</div>);
    }
}

ChatRoomItem.PropTypes = {
    id: PropTypes.string.isRequired,
    petOwnerUserId: PropTypes.string.isRequired,
    vetUserId: PropTypes.string.isRequired
};

export default ChatRoomItem;