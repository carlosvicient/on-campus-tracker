import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import UserList from './components/user-list/user-list';
import NotFound from './components/NotFound';
import About from './components/about/About';
import PrivateRoute from './routes/PrivateRoute';
import { AuthConsumer } from './helpers/Auth';
import Login from './components/login/login';
import withUsersFetch from './components/hoc/UsersHoc';
import withUserBackend from './components/hoc/HomeHoc';

class App extends Component {
  handleLoginSuccess = () => {
    console.log('The user is authenticated, here we can do whatever we want...');
  }

  render() {
    const UserListWithFetch = withUsersFetch(UserList);
    const UserWithBackend = withUserBackend();

    return (
      <div className="App">
        <AuthConsumer>
          {({ isAuth }) => (
            <Router>
              <div className="App">
                <header className="App-header">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      {isAuth &&
                        <li>
                          <Link to="/user">User</Link>
                        </li>
                      }
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/login">{isAuth ? 'logout': 'login'}</Link>
                      </li>
                    </ul>
                  </nav>
                </header>
                <main>
                  <Switch>
                    <Route path="/dashboard">
                      <UserListWithFetch />
                    </Route>
                    <PrivateRoute exact path="/user">                      
                        <UserWithBackend  />                  
                    </PrivateRoute>
                    <Route path="/login">
                      <Login onLoginSuccess={this.handleLoginSuccess} />
                    </Route>
                    <Route path="/">
                      <About />
                    </Route>
                    <Route>
                      <NotFound />
                    </Route>
                  </Switch>
                </main>
              </div>
            </Router>
          )}
        </AuthConsumer>
      </div>
    );
  }
}

export default App;