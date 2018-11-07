import React, {Component} from "react";
import { connect } from "react-redux";
import {onLogIn, onDataChange} from './redux';
import { onLogInSuccess } from '../User/action';

import {withRouter} from 'react-router';
import './Login.css';

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import styled from 'styled-components';

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


class Login extends Component {
    onLogIn = () => {
        const {username} = this.props;
        this.props.onLogInSuccess('xxxxx', username);
        this.props.history.push('/afterLogin');
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
                                                this.props.onChange("username", e.value)
                                            }
                                        }/>
                                    </InputGroup>
                                </div>
                                <div className="col-12 login-input">
                                    <InputGroup>
                                        <Input placeholder="password" value={password} type="password" onChange={
                                            e => {
                                                this.props.onChange("password", e.value)
                                            }
                                        }/>
                                    </InputGroup>
                                </div>
                                <div className="col-12 login-input">
                                    <Button outline color="primary" block onClick={this.onLogIn}>Login</Button>{' '}
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
    onLogInSuccess: (jwt, username) => dispatch(onLogInSuccess(jwt, username))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));