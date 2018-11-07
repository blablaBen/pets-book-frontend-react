import React, { Component } from "react";
import './AfterLogin.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';
import {FEED_URL, INTEREST_URL, ASK_URL, INBOX_URL, PROFILE_URL} from "../Const/URLConstant";
import {Switch} from 'react-router-dom';
import PrivateRoute from '../Components/PrivateRoute';
import styled from 'styled-components';
import Feed from '../Feed/Feed';

const Container = styled.div.attrs({
    className: "container"
})`

`


export default class AfterLogin extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">PetsBook</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href={FEED_URL}>Feed</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={INTEREST_URL}>Interest</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={ASK_URL}>Ask</NavLink>
                            </NavItem>
                            <NavItem>
                                <Input placeholder="Search User Profile" />    
                            </NavItem>
                            <NavItem>
                                <NavLink href={INBOX_URL}>Inbox</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href={PROFILE_URL}>Profile</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Container>
                    <Switch>
                        <PrivateRoute path={FEED_URL} component={Feed} />
                    </Switch>
                </Container>
            </div>
        );
    }
}