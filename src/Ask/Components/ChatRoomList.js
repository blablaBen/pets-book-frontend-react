import React, {Component} from 'react';
import {connect, dispatch} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {NORMAL, VET} from '../../Const/UserTypeConstant';
import {HOST} from '../../Const/URLConstant';
import ChatRoomItem from './ChatRoomItem';

class ChatRoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatroomList: []
        }
    }

    componentDidMount() {
        const {userId, jwt} = this.props;
        console.log(jwt);
        axios.get(`${HOST}/messages?userId=${userId}&userType=${NORMAL}`, { headers: { Authorization: jwt }}).then((response) => {
            this.setState({chatroomList: response.data.data});
        }, (error) => {
            alert(error);
        });
    }

    render() {
        const {chatroomList} = this.state;
        return (<div className="row">
            {chatroomList.map((item) => {
                return <ChatRoomItem 
                    id={item.id}
                    petOwnerUserId={item.petOwnerUserId}
                    vetUserId={item.vetUserId}
                    ></ChatRoomItem>
            })};
        </div>);
    }
}

const mapStateToProp = state => ({
    userId: state.user.userId,
    jwt: state.user.jwt
});

const mapActionToProp = dispatch => ({

});


export default withRouter(connect(mapStateToProp, mapActionToProp)(ChatRoomList));