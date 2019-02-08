import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          <ul>
            <li> <Link to="/About">About</Link> </li>
            <li> <Link to="/Contact">Contact</Link> </li>
          </ul>
      </div>
    );
  }
}

export default App;
