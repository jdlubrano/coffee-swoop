import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="nav white">
        <div className="row">
          <div className="nav-wrapper col s12">
            <Link className="brand-logo brown-text" to='/'>Coffee Swoop</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down nav-list">
              <li>
                <Link to='/sign_in' className="brown-text">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
