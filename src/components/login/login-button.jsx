import React, { Component } from 'react';

class LoginButton extends Component {
    constructor(props) {
        super(props);
        this.state = { auth: false };
    }
    render() {
        return (
            <button>Log in</button>
        );
    }
}

export default LoginButton;