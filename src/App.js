import React, { Component } from 'react';
import './App.css';

import BigButton from './components/big-button/big-button';
import BigSwitch from './components/big-switch/big-switch';
import StatusButton from './components/status-button/status-button';
import StatusImage from './components/status-image/status-image';
import UserList from './components/user-list/user-list';
import UserPreview from './components/user-preview/user-preview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BigButton />
        <BigSwitch />
        <StatusButton available={true}/>
        <StatusImage />
        <UserPreview />
        <UserList />
      </div>
    );
  }
}

export default App;
