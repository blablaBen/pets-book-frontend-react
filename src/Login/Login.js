import React, {Component} from "react";
import { connect } from "react-redux";
import {onLogIn, onDataChange} from './redux';
import './Login.css';

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class Login extends Component {

    render() {
        const {username, password} = this.props;
        return (
            <div class="container-fluid h-100">
                <div class="row h-100 align-items-center">
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
                                    <Button outline color="primary" block>Login</Button>{' '}
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
    onLogIn: (key, value) => dispatch(onLogIn(key, value)),
    onChange: (key,value) => dispatch(onDataChange(key, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);