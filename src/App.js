import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import USERS from './users';

import Home from './components/home/Home';
import UserList from './components/user-list/user-list';
import NotFound from './components/NotFound';
import About from './components/about/About';
import PrivateRoute from './routes/PrivateRoute';
import { AuthProvider } from './helpers/Auth';
import Login from './components/login/login';


class App extends Component {
  constructor(props) {
    super(props);
    // posible values "available/busy and on-campus/home-office"
    this.state = {
      myUser: { ...USERS[0] },
      users: [...USERS]
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <header className="App-header">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/login">login</Link>
                  </li>
                </ul>
              </nav>
            </header>
            <main>
              <AuthProvider>
                <Switch>
                  <Route path="/dashboard">
                    <UserList users={this.state.users} />
                  </Route>
                  <PrivateRoute exact path="/user">
                    <Home user={this.state.myUser} onChangePlace={this.updateUserPlace} onChangeStatus={this.updateUserStatus} />
                  </PrivateRoute>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/">
                    <About />
                  </Route>
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </AuthProvider>
            </main>
          </div>
        </Router>
      </div>
    );
  }

  updateUserPlace = (onCampus) => {
    const place = onCampus ? 'on-campus' : 'home-office';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].place = place;

      return {
        myUser: {
          ...state.myUser,
          place
        },
        users: newUserList
      }
    });
  }

  updateUserStatus = (available) => {
    const status = available ? 'available' : 'busy';
    this.setState((state) => {

      let newUserList = [...this.state.users];
      //myUser is always in pos[0] in the demo. However, in real app this will not be true.
      newUserList[0].status = status;

      return {
        myUser: {
          ...state.myUser,
          status
        },
        users: newUserList
      }
    });
  }
}

export default App;