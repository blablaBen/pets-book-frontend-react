import React from "react";
import './Login.css';

import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

export default () => (
<div class="container-fluid h-100">
  <div class="row h-100 align-items-center">
        <div className="col-12">
                <div className="row justify-content-center">
                    <div className="col-4 login-container">
                        <div className="col-12 name">PetsBook</div>
                        <div className="col-12 login-input">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                                <Input placeholder="username" />
                            </InputGroup>
                        </div>
                        <div className="col-12 login-input">
                            <InputGroup>
                                <Input placeholder="password" />
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