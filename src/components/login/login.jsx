import React, { Component } from 'react';
import { AuthContext } from '../../helpers/Auth';

class Login extends Component {
    static contextType = AuthContext;
    
    componentDidMount() {
        const auth = this.context;
        console.log(auth) // { name: 'Tania', loggedIn: true }
    }

    render() {
        return (
            <div className="Login">
                {this.context.isAuth && <button onClick={this.context.logout}>Log out</button>}
                {!this.context.isAuth && <button onClick={this.context.login}>Log in</button>}
            </div>
        );
    }
}

export default Login;