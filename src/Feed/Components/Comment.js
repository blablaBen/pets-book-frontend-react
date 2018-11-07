import React, {Component} from "react";
import axios from 'axios';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: "",
            portraitUrl : ""
        }
    }

    componentWillMount() {

    }

    loadUserProfile() {
        axios.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response);
        })
    }
} 