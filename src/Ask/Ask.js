import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ChatRoomList from './Components/ChatRoomList';

const AskContainer = styled.div.attrs({
    className: "row justify-content-center"
})``;

const Ask = (props) => {
    return (
        <AskContainer>
            <div className="col">
                <div className="col-4">
                    <ChatRoomList></ChatRoomList>
                </div>
            </div>
        </AskContainer>
    );
}


export default Ask;