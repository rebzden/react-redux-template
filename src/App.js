import React, { Component } from 'react';
import LayoutLogged from './layouts/LayoutLogged';
import LayoutGuest from './layouts/LayoutGuest';
import './App.css';
import { AlertActions } from './actions/AlertActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        { localStorage.getItem('user') ? <LayoutLogged /> : <LayoutGuest /> }
      </div>
    );
  }
}

export default App;