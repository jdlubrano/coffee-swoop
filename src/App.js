import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import './Nav.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const SignIn = () => (
  <div className="SignIn">
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>
    </form>
  </div>
)

const Nav = () => (
  <div className="Nav">
    <ul className="Nav-list">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/sign_in'>Sign In</Link>
      </li>
    </ul>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/sign_in" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
