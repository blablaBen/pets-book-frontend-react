import React, {Component} from "react";
import { connect } from "react-redux";
import {onLogIn, onDataChange} from './redux';
import { onLogInSuccess } from '../User/action';

import {withRouter} from 'react-router';
import './Login.css';

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class Login extends Component {
    onLogIn = () => {
        const {username} = this.props;
        this.props.onLogInSuccess('xxxxx', username);
        this.props.history.push('/feed');
    }

    render() {
        const {username, password} = this.props;
        return (
            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-4 login-container">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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