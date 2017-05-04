import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Nav from '../nav/Nav';
import Home from '../home/Home';

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
