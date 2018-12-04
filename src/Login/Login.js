import React, {Component} from "react";
import { connect } from "react-redux";
import {onLogIn, onDataChange} from './redux';
import { onLogInSuccess, onUpdateUserSuccess } from '../User/action';
import axios from "axios";
import {HOST} from '../Const/URLConstant';

import {withRouter} from 'react-router';
import './Login.css';

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';


const Container = styled.div.attrs({
    className: "container-fluid h-100"
})`
background-color: #cf142b;
`

const LoginContainer = styled.div.attrs({
    className: "col-4 login-container"
})`
    border: 1px solid #afa3a3;
    padding: 15px;
    padding-bottom: 25px;
    background-color: white;

    webkit-box-shadow: 0 6pt 25pt 15pt rgba(25, 24, 24, 0.25);
    box-shadow: 0 6pt 25pt 15pt rgba(25, 24, 24, 0.25);
    border-radius: 3px;
`

const LoginWithGoogleStyle = {
    textAlign: "center"
}

class Login extends Component {

    constructor(props) {
        super(props);
        this.responseGoogle = this.onResponseFromGoogle.bind(this);
    }

    onLogIn = () => {
        const {username, password} = this.props;
        axios.post(`${HOST}/sessions`, {
            'email': username,
            'password': password
        }).then((response) => {
            const {token, profileName, userId} = response.data.data;
            this.processAfterLogin(token, profileName, userId);
        }, (error) => {
            alert(`Error!: ${error.response.data.errorMessage}`);
        });
    }

    processAfterLogin(token, profileName, userId) {
        this.props.onLogInSuccess(token, profileName, userId);
        this.fetchUserData(userId, token).then((responseData) => {
            const fulfieldUserData = responseData.data.data;
            this.props.onUpdateUserSuccess(fulfieldUserData);
            this.props.history.push('/afterLogin');
        });
    }

    fetchUserData(userId, jwt) {
        return axios.get(`${HOST}/user/${userId}`,
         { headers: { Authorization: jwt } });
    }

    onResponseFromGoogle(googleUser) {
        let token = googleUser.getAuthResponse().id_token;
        axios.post(`${HOST}/sessions?isSSO=true`, {
            'idtoken': token
        }).then((response) => {
            const {token, profileName, userId} = response.data.data;
            this.processAfterLogin(token, profileName, userId);
        }, (error) => {
            alert(`Error!: ${error.response.data.errorMessage}`);
        });
    }

    render() {
        const {username, password} = this.props;
        return (
            <Container>
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <LoginContainer>
                                <div className="col-12 name">PetsBook</div>
                                <div className="col-12 login-input">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                        <Input placeholder="username" value={username} onChange={
                                            e => {
                                                this.props.onChange("username", e.target.value)
                                            }
                                        }/>
                                    </InputGroup>
                                </div>
                                <div className="col-12 login-input">
                                    <InputGroup>
                                        <Input placeholder="password" value={password} type="password" onChange={
                                            e => {
                                                this.props.onChange("password", e.target.value)
                                            }
                                        }/>
                                    </InputGroup>
                                </div>
                                <div className="col-12 login-input">
                                    <Button outline color="primary" block onClick={this.onLogIn}>Login</Button>{' '}
                                </div>
                                <div className="col-12" style={LoginWithGoogleStyle}>
                                    <GoogleLogin
                                        clientId="541115279526-k7ps60te3gfd3os9satu7sjb0ipsfrbj.apps.googleusercontent.com"
                                        buttonText="Login With Google"
                                        onSuccess={this.responseGoogle}
                                        onFailure={this.responseGoogle}
                                    />
                                </div>
                            </LoginContainer>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    username: state.login.username,
    password: state.login.password
});

const mapDispatchToProps = dispatch => ({
    onLogIn: () => dispatch(onLogIn()),
    onChange: (key,value) => dispatch(onDataChange(key, value)),
    onLogInSuccess: (jwt, username, userId) => dispatch(onLogInSuccess(jwt, username, userId)),
    onUpdateUserSuccess: (fulfieldUserData) => dispatch(onUpdateUserSuccess(fulfieldUserData))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));