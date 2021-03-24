import React, { Component } from 'react';
import { AuthContext } from '../../helpers/Auth';
import { Redirect } from "react-router-dom";

class Login extends Component {
    static contextType = AuthContext;
    state = { redirect: false };

    componentDidMount() {
        const auth = this.context;
        console.log(auth) // { name: 'Tania', loggedIn: true }
    }

    handleLogOut = () => {
        this.context.logout();
    }

    handleLogIn = () => {
        this.context.login();
        this.setState({redirect: '/user'});
    }

    render() {
        if (this.state.redirect)
            return (<Redirect to={this.state.redirect} />);

        return (
            <div className="Login">
                {this.context.isAuth && <button onClick={this.handleLogOut}>Log out</button>}
                {!this.context.isAuth && <button onClick={this.handleLogIn}>Log in</button>}
            </div>
        );
    }
}

export default Login;