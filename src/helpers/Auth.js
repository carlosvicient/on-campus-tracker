//Code from https://codesandbox.io/s/q9m26noky6?file=/src/helpers/AuthContext.js:0-638 
import React from "react";

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  state = { isAuth: false };

  login = (userData) => {
      //userData is an object with the name and password. AuthProvider can query... (email, password)
    setTimeout(() => this.setState({ isAuth: true }), 1000);
  };

  logout = () => {
    this.setState({ isAuth: false });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };