import React from 'react';
class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null
        }
    }